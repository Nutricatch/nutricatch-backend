import { Gender } from "@prisma/client";
import { ActivityLevel } from "@prisma/client";
import { ParseIntPipe } from "@nestjs/common";
import { IsEnum, IsString, IsInt, IsNumber, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";

export class UpdateUserHealthDTO{
    @IsNumber()
    @Type(() => Number)
    weight?: number;

    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    age?: number;

    @IsEnum(Gender, {
        message: 'Gender must be one of the following values: ' + Object.values(Gender).join(', '),
        })
    @IsString()
    @IsNotEmpty()
    gender?: Gender
    
    @IsEnum(ActivityLevel, {
        message: 'activityLevel must be one of the following values: ' + Object.values(ActivityLevel).join(', '),
        })
    @IsString()
    @IsNotEmpty()
    activityLevel?: ActivityLevel

}