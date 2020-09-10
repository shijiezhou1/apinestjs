import { Module } from '@nestjs/common';
import { SubscribeController } from './subscribe.controller';

@Module({
    controllers: [SubscribeController]
})
export class SubscribeModule {}
