import { Test, TestingModule } from '@nestjs/testing';
import { TeachersScanService } from './teachers-scan.service';

describe('TeachersScanService', () => {
  let service: TeachersScanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeachersScanService],
    }).compile();

    service = module.get<TeachersScanService>(TeachersScanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
