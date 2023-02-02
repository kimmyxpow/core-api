import { Module } from '@nestjs/common';
import { TeachersScanService } from './teachers-scan.service';
import { TeachersScanController } from './teachers-scan.controller';

@Module({
  controllers: [TeachersScanController],
  providers: [TeachersScanService]
})
export class TeachersScanModule {}
