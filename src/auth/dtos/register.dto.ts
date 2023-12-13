import { Gender } from "@prisma/client";
import { ParseIntPipe } from "@nestjs/common";
import { IsEmail, IsString, IsStrongPassword} from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDTO{

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsStrongPassword()
    password: string
}