import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './libs/interceptors/logging.interceptor';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://103.79.143.150',
      'http://buithanhtho.name.vn',
      'https://buithanhtho.name.vn',
    ],
    credentials: true,
  });

  await app.listen(9000);
}
bootstrap();
