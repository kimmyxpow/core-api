import { PartialType } from '@nestjs/mapped-types';
import { CreateTeachersScanDto } from './create-teachers-scan.dto';

export class UpdateTeachersScanDto extends PartialType(CreateTeachersScanDto) {}
