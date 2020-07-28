import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const port =configService.get('port');
  app.useGlobalPipes(new ValidationPipe());
  console.log(port);
  await app.listen(port);
  
}
bootstrap();
