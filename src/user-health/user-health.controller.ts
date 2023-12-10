import { Controller } from '@nestjs/common';
import { UserHealthService } from './user-health.service';

@Controller('user-health')
export class UserHealthController {

    constructor(userHealthService: UserHealthService){}

    

}
