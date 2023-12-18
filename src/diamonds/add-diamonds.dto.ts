import { IsNumber} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class AddDiamondsDTO{
    @ApiProperty()
    @IsNumber()
    @Type(() => Number)
    diamondCounts: number
}