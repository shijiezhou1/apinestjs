import { Module } from '@nestjs/common';
import { PodcastsController } from './podcasts.controller';

@Module({
  controllers: [PodcastsController]
})
export class PodcastsModule {}
