import { Controller, Post, Body, Get } from '@nestjs/common';
import { Status } from '@src/interface/status.interface';
import { RedisService } from '@src/shared/redis/redis.service';

@Controller('subscribe')
export class SubscribeController {
    constructor(private redisService: RedisService) { }

    // important notes
    //You're sending form-data which NestJS does not correctly parse by default. You can use application/x-www-url-form-encoded or application/json along with the raw option in Postman. The JSON body would look like so:

    @Post()
    public async create(@Body() formData: object): Promise<Status> {
        const result = await this.redisService.save(formData);
        return { status: "success", data: result, code: 200 };
    }
    @Get()
    public async getAllEmails(): Promise<any> {
        const results = await this.redisService.getAllEmails();
        return { status: "success", data: results, code: 200 };
    }
}
