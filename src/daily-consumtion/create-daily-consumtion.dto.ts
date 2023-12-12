import { Gender } from "@prisma/client";
import { ParseIntPipe } from "@nestjs/common";
import { IsEnum, IsString, IsInt, IsNumber} from "class-validator";
import { Type } from "class-transformer";

export class CreateDailyConsumtionDTO{

    @IsNumber()
    @Type(() => Number)
    calories: number

    @IsNumber()
    @Type(() => Number)
    carbohydrates: number

    @IsNumber()
    @Type(() => Number)
    fat: number

    @IsNumber()
    @Type(() => Number)
    protein: number

}

