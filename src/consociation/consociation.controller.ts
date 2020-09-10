import { Controller, Get, Query } from '@nestjs/common';
import JSON_DATA from "@src/json/consociation.json";

@Controller('consociation')
export class ConsociationController {
    @Get()
    findAll(@Query() query: any) {
        return JSON_DATA;
    }
}
