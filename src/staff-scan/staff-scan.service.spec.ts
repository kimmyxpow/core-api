import { Test, TestingModule } from '@nestjs/testing';
import { StaffScanService } from './staff-scan.service';

describe('StaffScanService', () => {
  let service: StaffScanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StaffScanService],
    }).compile();

    service = module.get<StaffScanService>(StaffScanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
