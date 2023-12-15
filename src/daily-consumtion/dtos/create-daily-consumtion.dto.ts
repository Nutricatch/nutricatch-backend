import { IsNumber} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateDailyConsumtionDTO{

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    calories: number

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    carbohydrates: number

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    fat: number

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    protein: number

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    salt: number

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    sugar: number

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    fiber: number
}

