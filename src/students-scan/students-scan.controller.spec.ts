import { Test, TestingModule } from '@nestjs/testing';
import { StudentsScanController } from './students-scan.controller';
import { StudentsScanService } from './students-scan.service';

describe('StudentsScanController', () => {
  let controller: StudentsScanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsScanController],
      providers: [StudentsScanService],
    }).compile();

    controller = module.get<StudentsScanController>(StudentsScanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
