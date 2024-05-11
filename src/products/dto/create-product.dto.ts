// create-product.dto.ts

import { IsString, MinLength, MaxLength, IsInt, Min, Max, IsArray, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: "It productName must be String" })
  @IsNotEmpty({ message: "productName is Require" })
  @MinLength(3, { message: 'productName must be at least 3 characters long' })
  @MaxLength(20, { message: 'productName must be at most 20 characters long' })
  productName: string;

  @IsString({ message: "It must be String" })
  @IsNotEmpty({ message: "description is Require" })
  @MinLength(50, { message: 'Description must be at least 50 characters long' })
  @MaxLength(100, { message: 'Description must be at most 100 characters long' })
  description: string;

  @IsInt({ message: "price is number" })
  @IsNotEmpty({ message: "price is Require" })
  price: number;


  @IsOptional()
  readonly productImage: string;


  @IsNotEmpty({ message: 'Categories must not be empty' })
  categories: string;
}
