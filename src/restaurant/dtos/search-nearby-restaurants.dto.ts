import { IsNumber, IsLatitude, IsLongitude } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";
import { Optional } from "@nestjs/common";

export class SearchNearbyRestaurantsDTO {
    @ApiProperty({description: "Use the decimal format", example: "6.399702569134995"})
    @IsLatitude()
    latitude: number

    @ApiProperty({description: "Use the decimal format", example: "106.9937287941783"})
    @IsLongitude()
    longitude: number

    @ApiProperty({description: "Maximum output counts", required:false})
    @Optional()
    counts: number = 5

    @ApiProperty({description: "Search radius", required:false})
    radius: number = 1000
}