import { Controller, Get } from '@nestjs/common';

@Controller('medium')
export class MediumController {
    @Get()
    async getRss() {
        return await fetch('https://medium.com/feed/@jay315');
    }
}