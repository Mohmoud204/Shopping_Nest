import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes , Query} from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { ValidationPipe } from "../validation.pipe"
import { validate } from 'class-validator';
@Controller('categorys')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) { }
  @Get()
  async findAll(): Promise<Category[]> {
    return this.categorysService.findAll()
  }
  @Post()
  async addCategory(@Body() data: CreateCategoryDto): Promise<Category> {
    return this.categorysService.addCategory(data)
  }

  @Get("/:id")
  async findOne(@Param("id") id): Promise<Category> {
    return this.categorysService.findOne(id)
  }

  @Patch('/:id')
  async findOneAndUpdate(@Param('id') id: string, @Body() data: UpdateCategoryDto): Promise<Category> {
    return this.categorysService.findOneAndUpdate(id, data);
  }

  @Delete("/:id")
  async deleteCategory(@Param("id") id): Promise<Category[]> {
    return this.categorysService.deleteCategory(id)
  }
}
