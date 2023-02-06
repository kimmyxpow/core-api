import { PartialType } from '@nestjs/mapped-types';
import { CreateScanDto } from './create-scan.dto';

export class UpdateScanDto extends PartialType(CreateScanDto) {}
