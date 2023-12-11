import { Gender } from "@prisma/client";
import { ParseIntPipe } from "@nestjs/common";
import { IsEnum, IsString, IsInt, IsNumber} from "class-validator";
import { Type } from "class-transformer";

export class UpdateUserHealthDTO{
    @IsNumber()
    @Type(() => Number)
    weight?: number;

    @IsNumber()
    @Type(() => Number)
    age?: number;

    @IsEnum(Gender, {
        message: 'Gender must be one of the following values: ' + Object.values(Gender).join(', '),
        })
    @IsString()
    gender?: Gender
}