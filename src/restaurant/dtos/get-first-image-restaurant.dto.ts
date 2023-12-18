import { IsLatitude, IsLongitude, IsString, } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class GetFirstImageRestaurantDTO {
    @ApiProperty({description: "Restaurant id from nearby search", example: "ChIJi8lnvC-UaS4RE_ckE1zlIvI"})
    @IsString()
    restaurantId: string

    @ApiProperty({required:false})
    @Type(() => Number)
    width: number = 400

    @ApiProperty({required:false})
    @Type(() => Number)
    height: number = 400
}