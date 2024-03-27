import { Test, TestingModule } from '@nestjs/testing';
import { WhiskyHunterService } from './whisky-hunter.service';

describe('WhiskyHunterService', () => {
  let service: WhiskyHunterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhiskyHunterService],
    }).compile();

    service = module.get<WhiskyHunterService>(WhiskyHunterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
