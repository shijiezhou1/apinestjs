import { Body, Query, Controller, Post, Get, Put, Delete, Param } from '@nestjs/common';
import JSON_DATA from "@src/json/data.json";

@Controller('articles')
export class ArticlesController {
    @Post()
    create(@Body() createArticleDto: any) {
        return 'ok';
    }

    @Get()
    findAll(@Query() query: any) {
        return JSON_DATA;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {

    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateArticleDto: any) {

    }

    @Delete(':id')
    remove(@Param('id') id: string) {

    }


}
