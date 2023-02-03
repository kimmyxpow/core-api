import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { ClassesService } from './classes.service'
import { CreateClassDto } from './dto/create-class.dto'
import { UpdateClassDto } from './dto/update-class.dto'

@Controller('classes')
export class ClassesController {
    constructor(private readonly classesService: ClassesService) { }

    @Post()
    async create(@Body() createClassDto: CreateClassDto) {
        return await this.classesService.create(createClassDto)
    }

    @Get()
    async findAll() {
        return await this.classesService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.classesService.findOne(id)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
        return await this.classesService.update(id, updateClassDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.classesService.remove(id)
    }
}
