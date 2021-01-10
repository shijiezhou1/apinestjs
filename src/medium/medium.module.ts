import { Module, HttpModule } from '@nestjs/common';
import {MediumController} from "@src/medium/medium.controller";
import { MediumService } from './medium.service';

@Module({
    controllers: [MediumController],
    imports: [HttpModule],
    providers: [MediumService],
})
export class MediumModule {}
