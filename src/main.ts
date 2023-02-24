import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoClient } from 'mongodb';

async function bootstrap() {
  const client = new MongoClient(process.env.DB_URL);
  await client.connect();
  console.log('Connected successfully to server');

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
