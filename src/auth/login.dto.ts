import { Gender } from "@prisma/client";
import { ParseIntPipe } from "@nestjs/common";
import { IsEmail, IsStrongPassword, IsNotEmpty} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class LoginDTO{
    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    password: string
}