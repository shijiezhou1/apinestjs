import {Controller, Get, Query} from '@nestjs/common';
import JSON_DATA from "@src/json/podcasts.json";

@Controller('podcasts')
export class PodcastsController {
    @Get()
    findAll(@Query() query: any) {
        return JSON_DATA;
    }
}
