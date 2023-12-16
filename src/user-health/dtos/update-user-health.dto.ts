import { Gender, FitnessGoal } from "@prisma/client";
import { ActivityLevel } from "@prisma/client";
import { ParseIntPipe } from "@nestjs/common";
import { IsEnum, IsString, IsInt, IsNumber, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserHealthDTO {

    @ApiProperty()
    @Type(() => Number)
    weight?: number;

    @ApiProperty()
    @Type(() => Number)
    height?: number;

    @ApiProperty()
    @Type(() => Number)
    age?: number;

    @ApiProperty({ enum: ['MALE', 'FEMALE'] })
    gender?: Gender

    @ApiProperty({
        enum: [
            "SEDENTARY",
            "MODERATELY_ACTIVE",
            "VERY_ACTIVE"]
    })
    activityLevel?: ActivityLevel

    @ApiProperty({
        enum: [
            "WeightLoss",
            "Maintenance",
            "WeightGain"]
    })
    @IsString()
    fitnessGoal?: FitnessGoal

}