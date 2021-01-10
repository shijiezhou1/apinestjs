import { Controller, Get } from '@nestjs/common';
import { MediumService } from './medium.service';

@Controller('medium')
export class MediumController {
    constructor(private readonly mediumService: MediumService) {}

    @Get()
    async getRss() {
        return this.mediumService.findAllCats();
    }
}