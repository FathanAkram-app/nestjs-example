import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()

  const document = SwaggerModule.createDocument(app, config.build());

  SwaggerModule.setup('apitest', app, document);

  await app.listen(3000);
}
bootstrap();
