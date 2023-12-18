import { IsLatitude, IsLongitude, } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class SearchNearbyRestaurantsDTO {
    @ApiProperty({description: "Use the decimal format", example: "-6.399702569134995"})
    @IsLatitude()
    latitude: number

    @ApiProperty({description: "Use the decimal format", example: "106.9937287941783"})
    @IsLongitude()
    longitude: number

    @ApiProperty({description: "Maximum output counts", required:false})
    @Type(() => Number)
    counts: number = 5

    @ApiProperty({description: "Search radius", required:false})
    @Type(() => Number)
    radius: number = 1000
}