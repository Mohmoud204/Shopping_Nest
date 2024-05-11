import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Automatically transform payloads to DTO instances
    whitelist: true, // Strip non-whitelisted properties from DTOs
    forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
  }));
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
  console.log(`\t \n localhost:3000/api/v1`)
}
bootstrap();
