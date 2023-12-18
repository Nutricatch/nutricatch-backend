import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

@Injectable()
export class RestaurantService {
  private apiKey = process.env.MapsAPIKey

  async searchNearbyOpenRestaurants(latitude: number, longitude: number, maxResultCount: number, radius: number) {
    const restaurantData = await this.getAllNearbyRestaurants(latitude, longitude, maxResultCount, radius)
    const openRestaurants: any[] = [];

    for (const restaurant of restaurantData) {
        const placeId = restaurant.id;
        const detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${this.apiKey}`;
        const detailsResponse = await axios.get(detailsUrl);
        const location = detailsResponse.data.result.geometry.location
        const isOpenNow = detailsResponse.data.result.current_opening_hours.open_now;
        if(isOpenNow){
          openRestaurants.push({...restaurant, location})
        }
    }

    return openRestaurants
  }

  async getFirstPhotoById(placeId: string, width: number, height: number) {
    try {
      const photoName = await this.getFirstRestaurantPhotoName(placeId)
      const photoUrl = await this.getPhotoUrl(photoName, width, height)
      return photoUrl
    } catch (error) {
      console.error('Error fetching Google Place data:', error.message);
      throw error;
    }
  }

  async getFirstRestaurantPhotoName(placeId: string) {
    const response = await axios.get(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': this.apiKey,
        'X-Goog-FieldMask': 'photos',
      },
    });
    return response.data.photos[0].name
  }

  async getPhotoUrl(photoName: string, maxWidthPx: number, maxHeightPx: number) {
    const originalUrl = `https://places.googleapis.com/v1/${photoName}/media?maxHeightPx=400&maxWidthPx=400&key=${this.apiKey}`
    try {
      const response = await axios.get(originalUrl, { maxRedirects: 1 });
      return response.request.res.responseUrl || originalUrl;
    } catch (error) {
      throw new Error(`Error fetching URL: ${originalUrl}. ${error.message}`);
    }
  }

  async getAllNearbyRestaurants(latitude: number, longitude: number, maxResultCount: number, radius: number): Promise<any> {
    const apiUrl = "https://places.googleapis.com/v1/places:searchNearby"

    const requestData = {
      includedTypes: ['restaurant'],
      maxResultCount,
      locationRestriction: {
        circle: {
          center: {
            latitude,
            longitude,
          },
          radius,
        },
      },
    };

    try {
      const response = await axios.post(apiUrl, requestData, {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': this.apiKey,
          'X-Goog-FieldMask': 'places.displayName,places.id',
        },
      });

      return response.data.places;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
}
