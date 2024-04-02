import { Test, TestingModule } from '@nestjs/testing';
import { OpendotaController } from './opendota.controller';

describe('OpendotaController', () => {
  let controller: OpendotaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpendotaController],
    }).compile();

    controller = module.get<OpendotaController>(OpendotaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
