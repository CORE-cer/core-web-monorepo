import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { patchNestJsSwagger } from 'nestjs-zod';
import { exit } from 'process';

import { AppModule } from './app.module.js';

patchNestJsSwagger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder().setTitle('Cats example').setDescription('The cats API description').setVersion('1.0').addTag('cats').build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  const port = process.env.MIDDLEWARE_API_PORT;

  if (!port) {
    console.error('MIDDLEWARE_API_PORT environment variable is not set.');
    exit(1);
  }

  await app.listen(port);
}
await bootstrap();
