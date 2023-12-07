/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import * as csvParser from 'csv-parser';
import { diskStorage } from 'multer';
import * as fs from 'fs';

@Injectable()
export class FoodsService {
  
  async getFoods() {
    const results = [];
    const foodFilePath = "public/food_nutrition_fix_1.csv";
    const foodPromise = new Promise( (resolve, reject) => {
    const parserOptions = { headers: false }
    fs.createReadStream(foodFilePath)
    .pipe(csvParser(parserOptions))
    .on('data', (data) => results.push(data))
    .on('end', () => {resolve(results)})
    }
    )
    return foodPromise

  }

  


}