import { Module } from '@nestjs/common';
import { UnsplashModule } from './unsplash/unsplash.module';

@Module({
    imports: [UnsplashModule],
})
export class AppModule {}
