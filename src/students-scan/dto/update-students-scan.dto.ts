import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentsScanDto } from './create-students-scan.dto';

export class UpdateStudentsScanDto extends PartialType(CreateStudentsScanDto) {}
