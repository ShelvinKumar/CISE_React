//src/main.ts
import { NestFactory } from '@nestjs/core';
import { ArticlesModule } from './articles.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(ArticlesModule);

  const corsOptions: CorsOptions = {
    origin: [process.env.FRONTEND_URL],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204,
  };

  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();