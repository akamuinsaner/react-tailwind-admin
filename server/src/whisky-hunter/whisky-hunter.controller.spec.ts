import { Test, TestingModule } from '@nestjs/testing';
import { WhiskyHunterController } from './whisky-hunter.controller';

describe('WhiskyHunterController', () => {
  let controller: WhiskyHunterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WhiskyHunterController],
    }).compile();

    controller = module.get<WhiskyHunterController>(WhiskyHunterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
