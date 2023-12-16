import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('restaurants')
export class RestaurantController {
    constructor(
        private restaurantService: RestaurantService
    ) { }

    @ApiTags('restaurants')
    @Get('search/:latitude/:longitude/:counts')
    async searchNearbyRestaurants(
        @Param('latitude') latitude: number,
        @Param('longitude') longitude: number,
        @Param('counts') counts: number
    ) {
        try {
            const result = await this.restaurantService.searchNearbyRestaurants(
                latitude,
                longitude,
                counts
            );
            return result;
        } catch (error) {
            return { error: error.message || 'Internal Server Error' };
        }
    }
}
