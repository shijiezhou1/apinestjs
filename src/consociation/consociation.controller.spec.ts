import { Test, TestingModule } from '@nestjs/testing';
import { ConsociationController } from './consociation.controller';

describe('Consociation Controller', () => {
  let controller: ConsociationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsociationController],
    }).compile();

    controller = module.get<ConsociationController>(ConsociationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
