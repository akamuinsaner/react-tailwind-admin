import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { WhiskyHunterService } from './whisky-hunter.service';
import { WhiskyHunterInterceptor } from './whisky-hunter.interceptor';

@Controller('whisky-hunter')
@UseInterceptors(WhiskyHunterInterceptor)
export class WhiskyHunterController {
    constructor(private whiskyHunterService: WhiskyHunterService) {}
    @Get('list')
    list() {
        return this.whiskyHunterService.list();
    }
}
