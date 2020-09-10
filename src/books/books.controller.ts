import { Controller, Post, Body, Get, Query, Param, Put, Delete } from '@nestjs/common';
import JSON_DATA from "@src/json/books.json";

@Controller('books')
export class BooksController {

    @Get()
    findAll(@Query() query: any) {
        return JSON_DATA;
    }
}
