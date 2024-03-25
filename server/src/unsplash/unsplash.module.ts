import { Module } from '@nestjs/common';
import { UnsplashController } from './unsplash.controller';
import { UnsplashService } from './unsplash.service';

@Module({
    controllers: [UnsplashController],
    providers: [UnsplashService],
})
export class UnsplashModule {}
