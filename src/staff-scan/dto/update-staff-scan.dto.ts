import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffScanDto } from './create-staff-scan.dto';

export class UpdateStaffScanDto extends PartialType(CreateStaffScanDto) {}
