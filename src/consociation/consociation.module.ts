import { Module } from '@nestjs/common';
import { ConsociationController } from './consociation.controller';

@Module({
  controllers: [ConsociationController]
})
export class ConsociationModule {}
