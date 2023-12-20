import { Controller, Get, Param, Query } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { ApiTags } from '@nestjs/swagger';
import { SearchNearbyRestaurantsDTO } from './dtos/search-nearby-restaurants.dto';
import { GetFirstImageRestaurantDTO } from './dtos/get-first-image-restaurant.dto';

@Controller('restaurants')
export class RestaurantController {
    constructor(
        private restaurantService: RestaurantService
    ) { }

    @ApiTags('restaurants')
    @Get('search')
    async searchNearbyRestaurants(
        @Query() data: SearchNearbyRestaurantsDTO,
    ) {
        try {
            const result = await this.restaurantService.searchNearbyOpenRestaurants(
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
    @ApiTags('restaurants')
    @Get('search-all')
    async searchAllNoLimit(@Query() data: SearchNearbyRestaurantsDTO) {
        return await this.restaurantService.getAllNearbyRestaurants(data.latitude, data.longitude, data.counts, data.radius)
    }

    @ApiTags('restaurants')
    @Get('first-photo-url')
    async getImage(@Query() data: GetFirstImageRestaurantDTO) {
        return await this.restaurantService.getFirstPhotoById(data.restaurantId, data.width, data.height)
    }

}
