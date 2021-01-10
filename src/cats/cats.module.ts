import { Module, HttpModule } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  imports: [HttpModule],
  providers: [CatsService],
  exports: [CatsService]
})
export class CatsModule {}