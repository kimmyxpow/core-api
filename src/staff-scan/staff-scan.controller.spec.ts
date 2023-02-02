import { Test, TestingModule } from '@nestjs/testing';
import { StaffScanController } from './staff-scan.controller';
import { StaffScanService } from './staff-scan.service';

describe('StaffScanController', () => {
  let controller: StaffScanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StaffScanController],
      providers: [StaffScanService],
    }).compile();

    controller = module.get<StaffScanController>(StaffScanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
