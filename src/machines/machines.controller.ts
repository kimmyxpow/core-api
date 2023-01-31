import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { MachinesService } from './machines.service';
import { CreateMachineDto } from './dto/create-machine.dto';
import { UpdateMachineDto } from './dto/update-machine.dto';

@Controller('machines')
export class MachinesController {
    constructor(private readonly machinesService: MachinesService) {}

    @Post()
    async create(@Body() createMachineDto: CreateMachineDto) {
        return this.machinesService.create(createMachineDto);
    }

    @Get()
    async findAll() {
        return await this.machinesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.machinesService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: string,
        @Body() updateMachineDto: UpdateMachineDto,
    ) {
        return await this.machinesService.update(id, updateMachineDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.machinesService.remove(id);
    }
}
