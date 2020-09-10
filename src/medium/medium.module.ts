import { Module } from '@nestjs/common';
import {MediumController} from "@src/medium/medium.controller";

@Module({
    controllers: [MediumController]
})
export class MediumModule {}
