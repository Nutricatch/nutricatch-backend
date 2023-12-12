import { Gender } from "@prisma/client";
import { ActivityLevel } from "@prisma/client";
import { ParseIntPipe } from "@nestjs/common";
import { IsEnum, IsString, IsInt, IsNumber, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserHealthDTO{
    
    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    weight?: number;

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    @IsNotEmpty()
    age?: number;

    @ApiProperty({enum: ['MALE', 'FEMALE']})
    @IsEnum(Gender, {
        message: 'Gender must be one of the following values: ' + Object.values(Gender).join(', '),
        })
    @IsString()
    @IsNotEmpty()
    gender?: Gender
    
    @ApiProperty({enum: ['LIGHT', 'MODERATE', 'ATHLETIC']})
    @IsEnum(ActivityLevel, {
        message: 'activityLevel must be one of the following values: ' + Object.values(ActivityLevel).join(', '),
        })
    @IsString()
    @IsNotEmpty()
    activityLevel?: ActivityLevel

}