import { HttpModule, Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';

@Module({
  controllers: [ImageController],
  providers: [ImageService],
  imports: [HttpModule],
  exports: [ImageService],
})
export class ImageModule {}
