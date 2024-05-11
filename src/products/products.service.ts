import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductSchema } from "./entities/product.entity"
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productSchema: Model<Product>) { }
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll(): Promise<Product[]> {
    return await this.productSchema.find().populate('categories').exec()

  }

  async addProducts(data: CreateProductDto): Promise<Product> {
    const { productName } = data
    const foundProductName = await this.productSchema.findOne({ productName })
    if (foundProductName) throw new BadRequestException("This product already exists")
    const createdProduct = new this.productSchema(data);
    return createdProduct.save();
  }
}
