import { Module } from '@nestjs/common';
import { OpendotaController } from './opendota.controller';
import { OpendotaService } from './opendota.service';

@Module({
  controllers: [OpendotaController],
  providers: [OpendotaService]
})
export class OpendotaModule {}
