import {
  IsString, IsUrl, Length, IsOptional, MinLength,
  MaxLength,IsNotEmpty
} from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'The category must be a string' })
  @IsNotEmpty({ message: 'The category must be a required' })
  @MinLength(3, { message: 'The category name must be more than 3 ' })
  @MaxLength(20, { message: 'The category name must be less than 20' })
  readonly categoryName: string;

  @IsOptional()
  readonly categoryImage: string;
}
