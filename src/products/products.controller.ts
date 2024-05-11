import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from "./entities/product.entity"
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
  
  @Post()
  async addProducts(@Body() data:CreateProductDto):Promise<Product>{
    return this.productsService.addProducts(data);
  }
}
