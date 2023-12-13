import { Gender } from "@prisma/client";
import { ParseIntPipe } from "@nestjs/common";
import { IsEnum, IsString, IsInt, IsNumber} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class DeleteDailyConsumtionByIdDTO{

    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    consumtionId: number

}