import { Get, Query, Redirect } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
    constructor(private readonly imageService: ImageService) { }

    @Get()
    @Redirect('https://www.google.com', 302)
    async findImage(@Query() query: any, ) {
        const url = await this.imageService.findImage();
        return { url };
    }

}
