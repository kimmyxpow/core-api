import { Module } from '@nestjs/common';
import { ScansService } from './scans.service';
import { ScansController } from './scans.controller';

@Module({
  controllers: [ScansController],
  providers: [ScansService]
})
export class ScansModule {}
