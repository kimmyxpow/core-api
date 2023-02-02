import { Test, TestingModule } from '@nestjs/testing';
import { StudentsScanService } from './students-scan.service';

describe('StudentsScanService', () => {
  let service: StudentsScanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsScanService],
    }).compile();

    service = module.get<StudentsScanService>(StudentsScanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
