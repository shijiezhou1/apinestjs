import { Controller, Get, Post, Req } from '@nestjs/common';
import { VisitorService } from './visitor.service';

@Controller('visitor')
export class VisitorController {
    constructor(private readonly visitorService: VisitorService) { }

    @Get()
    async findAllVisitors(@Req() req: any): Promise<Record<string, any>> {
        return { no: "no data" };
    }

    @Post()
    async createVisitor(@Req() req: any): Promise<any> {
        return {};
    }
}
