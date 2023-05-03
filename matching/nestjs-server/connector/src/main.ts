import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(PORT);
}
bootstrap();
