import { Test, TestingModule } from '@nestjs/testing';
import { OpendotaService } from './opendota.service';

describe('OpendotaService', () => {
  let service: OpendotaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpendotaService],
    }).compile();

    service = module.get<OpendotaService>(OpendotaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
