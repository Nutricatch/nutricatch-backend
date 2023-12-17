import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

@Injectable()
export class RestaurantService {
    private apiUrl = "https://places.googleapis.com/v1/places:searchNearby"
    private apiKey =  process.env.MapsAPIKey

    async searchNearbyRestaurants(latitude: number, longitude: number, maxResultCount:number, radius:number) {
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
            const response = await axios.post(this.apiUrl, requestData, {
              headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': this.apiKey,
                'X-Goog-FieldMask': 'places.displayName,places.id,places.photos',
              },
            });
      
            return response.data;
          } catch (error) {
            throw error.response?.data || error.message;
          }
        }
      
}
