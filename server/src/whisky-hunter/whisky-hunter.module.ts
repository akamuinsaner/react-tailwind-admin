import { Module } from '@nestjs/common';
import { WhiskyHunterController } from './whisky-hunter.controller';
import { WhiskyHunterService } from './whisky-hunter.service';

@Module({
  controllers: [WhiskyHunterController],
  providers: [WhiskyHunterService]
})
export class WhiskyHunterModule {}
