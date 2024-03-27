import { Module } from '@nestjs/common';
import { UnsplashModule } from './unsplash/unsplash.module';
import { WhiskyHunterModule } from './whisky-hunter/whisky-hunter.module';

@Module({
    imports: [UnsplashModule, WhiskyHunterModule],
})
export class AppModule {}
