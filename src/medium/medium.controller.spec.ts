import { Test, TestingModule } from '@nestjs/testing';
import { MediumController } from './medium.controller';

describe('Medium Controller', () => {
  let controller: MediumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MediumController],
    }).compile();

    controller = module.get<MediumController>(MediumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
