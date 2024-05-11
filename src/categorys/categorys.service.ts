import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from './entities/category.entity';
@Injectable()
export class CategorysService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>) { }
  /*@getAll */
  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec()
  }
  /*@addCatagre */
  async addCategory(data): Promise<Category> {
    const { categoryName } = data
    const category = await this.categoryModel.findOne({ categoryName }).exec();
    if (category) {
      throw new BadRequestException(`Category with name ${categoryName} before found`);
    }
    const createdCategory = new this.categoryModel(data);
    return createdCategory.save();

  }
  /*@getoneById */
  async findOne(id): Promise<Category> {
    const categoryId = await this.categoryModel.findById(id).exec();
    if (!categoryId) throw new NotFoundException(`id not found `)
    return categoryId
  }
  /*@getone & update */
  async findOneAndUpdate(id, data): Promise<Category> {
    return this.categoryModel.findByIdAndUpdate(id, data, { new: true }).exec();;
  }
  /*@ delete */
  async deleteCategory(id: string): Promise<Category[]> {
    await this.categoryModel.findByIdAndDelete(id).exec();
    return this.findAll()
  }
  /*@serch by letter*/
  
}
