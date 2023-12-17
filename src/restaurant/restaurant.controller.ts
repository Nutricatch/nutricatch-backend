import { Controller, Get, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { ApiTags } from '@nestjs/swagger';
import { SearchNearbyRestaurantsDTO } from './dtos/search-nearby-restaurants.dto';

@Controller('restaurants')
export class RestaurantController {
    constructor(
        private restaurantService: RestaurantService
    ) { }

    @ApiTags('restaurants')
    @Get('search')
    async searchNearbyRestaurants(
        @Query() data: SearchNearbyRestaurantsDTO ,
    ) {
        try {
            const result = await this.restaurantService.searchNearbyRestaurants(
                data.latitude,
                data.longitude,
                data.counts,
                data.radius
            );
            return result;
        } catch (error) {
            return { error: error.message || 'Internal Server Error' };
        }
    }
}
