import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({transform: true}))
  const config = new DocumentBuilder()
  .setTitle('Nutricath API')
  .setDescription('API for Nutricatch user authentication and resource access')
  .setVersion('1.0')
  .addTag('example') // Add tags for your controllers
  .build();

  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000);
}
bootstrap();
