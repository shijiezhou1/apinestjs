import { Controller, Get } from '@nestjs/common';
import { MediumService } from './medium.service';
import Parser from 'rss-parser';

@Controller('medium')
export class MediumController {
    constructor(private readonly mediumService: MediumService) {}

    @Get()
    async getRss() {
        const parser = new Parser();
        const feed = await parser.parseURL("https://medium.com/feed/@jay315");
        return feed.items;
        // return this.mediumService.findAllCats();
    }
}