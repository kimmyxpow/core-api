import { Test, TestingModule } from '@nestjs/testing';
import { TeachersScanController } from './teachers-scan.controller';
import { TeachersScanService } from './teachers-scan.service';

describe('TeachersScanController', () => {
  let controller: TeachersScanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeachersScanController],
      providers: [TeachersScanService],
    }).compile();

    controller = module.get<TeachersScanController>(TeachersScanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
