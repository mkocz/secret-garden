import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import express from 'express';
import { join } from 'path';
import { Request, Response } from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.setGlobalPrefix('api');

  server.use(express.static(join(__dirname, '..', 'client', 'build')));
  server.all('*', (req: Request, res: Response) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });

  await app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
