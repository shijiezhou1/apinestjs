import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

import { initContainer } from './app/app.container';

import { NestExpressApplication } from '@nestjs/platform-express';

const port = process.env.PORT || 8000

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  initContainer(app);
  await app.listen(port, ()=>console.log(`Listen in port: ${port}`));
}
bootstrap();