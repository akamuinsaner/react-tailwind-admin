import { Module } from '@nestjs/common';
import { OpenLibraryService } from './open-library.service';
import { OpenLibraryController } from './open-library.controller';

@Module({
    providers: [OpenLibraryService],
    controllers: [OpenLibraryController],
})
export class OpenLibraryModule {}
