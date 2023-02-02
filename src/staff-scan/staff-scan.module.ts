import { Module } from '@nestjs/common';
import { StaffScanService } from './staff-scan.service';
import { StaffScanController } from './staff-scan.controller';

@Module({
  controllers: [StaffScanController],
  providers: [StaffScanService]
})
export class StaffScanModule {}
