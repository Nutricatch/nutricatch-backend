import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

@Injectable()
export class RestaurantService {
    private apiUrl = "https://places.googleapis.com/v1/places:searchNearby"
    private apiKey =  process.env.MapsAPIKey

    async searchNearbyRestaurants(latitude: number, longitude: number, maxResultCount=10) {
        const requestData = {
            includedTypes: ['restaurant'],
            maxResultCount,
            locationRestriction: {
              circle: {
                center: {
                  latitude,
                  longitude,
                },
                radius: 500.0,
              },
            },
          };

          try {
            const response = await axios.post(this.apiUrl, requestData, {
              headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': this.apiKey,
                'X-Goog-FieldMask': 'places.displayName',
              },
            });
      
            return response.data;
          } catch (error) {
            throw error.response?.data || error.message;
          }
        }
      
}
