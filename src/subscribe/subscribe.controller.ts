import { Controller, Post, Body, Get } from '@nestjs/common';
import { Status } from '@src/interface/status.interface';
import { RedisService } from '@src/shared/redis/redis.service';

@Controller('subscribe')
export class SubscribeController {
    constructor(private redisService: RedisService) {}

    @Post()
    public async create(@Body() email: object): Promise<Status> {
        const result = await this.redisService.save(email);
        return {status: "success", data: result, code: 200};
    }
    @Get()
    public get(): Status {
        return {status: "failure", data: {}, code: 200};
    }
}
