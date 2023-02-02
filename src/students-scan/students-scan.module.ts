import { Module } from '@nestjs/common';
import { StudentsScanService } from './students-scan.service';
import { StudentsScanController } from './students-scan.controller';

@Module({
  controllers: [StudentsScanController],
  providers: [StudentsScanService]
})
export class StudentsScanModule {}
