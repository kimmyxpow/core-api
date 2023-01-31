import { 
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete
} from '@nestjs/common';
import { ClassService } from './class.service';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';

@Controller('class')
export class ClassController {
    constructor(private readonly classService: ClassService) {}

    @Post()
    async create(@Body() createClassDto: CreateClassDto) {
        return this.classService.create(createClassDto);
    }

    @Get()
    async findAll() {
        return this.classService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.classService.findOne(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateClassDto: UpdateClassDto) {
        return this.classService.update(id, updateClassDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.classService.remove(id);
    }
}
