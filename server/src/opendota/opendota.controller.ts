import { Controller, Get } from '@nestjs/common';
import { OpendotaService } from './opendota.service';

@Controller('opendota')
export class OpendotaController {
    constructor(private opendotaService: OpendotaService) {}

    @Get('heroStats')
    async heroStats() {
        return this.opendotaService.heroStats();
    }

    @Get('heroes')
    async heroes() {
        return this.opendotaService.heroes();
    }
}
