import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { ScansService } from './scans.service'
import { CreateScanDto } from './dto/create-scan.dto'
import { UpdateScanDto } from './dto/update-scan.dto'

@Controller('scans')
export class ScansController {
    constructor(private readonly scansService: ScansService) {}

    @Get()
    findAll() {
        return this.scansService.findAll()
    }
}
