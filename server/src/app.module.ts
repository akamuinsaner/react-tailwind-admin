import { Module } from '@nestjs/common';
import { UnsplashModule } from './unsplash/unsplash.module';
import { WhiskyHunterModule } from './whisky-hunter/whisky-hunter.module';
import { OpenLibraryModule } from './open-library/open-library.module';

@Module({
    imports: [UnsplashModule, WhiskyHunterModule, OpenLibraryModule],
    controllers: [],
})
export class AppModule {}
