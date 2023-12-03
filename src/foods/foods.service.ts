import { Injectable } from '@nestjs/common';
import * as tf from '@tensorflow/tfjs';

@Injectable()
export class FoodsService {
 
  
  private async loadModel() {
    return await tf.loadLayersModel('file://./model/model.json');
  }

  async predict( inputData: tf.Tensor){
    const model = await this.loadModel();
    const result = model.predict(inputData);
    model.dispose();
    return result;
  }

}