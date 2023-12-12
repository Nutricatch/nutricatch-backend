import { IsISO8601 } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DateQueryDto {
  
  @ApiProperty()
  @IsISO8601()
  date: string;
}