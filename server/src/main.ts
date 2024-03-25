import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(3001);
}
bootstrap();
