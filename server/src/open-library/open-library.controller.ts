import { Controller, Get, Query } from '@nestjs/common';
import { OpenLibraryService } from './open-library.service';

@Controller('open-library')
export class OpenLibraryController {
    constructor(private openLibraryService: OpenLibraryService) {}

    @Get('list')
    async list(@Query('offset') offset, @Query('limit') limit) {
        return this.openLibraryService.list({
            offset,
            limit,
        });
    }
}
