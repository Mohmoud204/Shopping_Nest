// product.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Category } from '../../categorys/entities/category.entity'; // Import Category model
import * as mongoose from 'mongoose';
@Schema({ timestamps: true })
export class Product extends Document {
  @Prop()
  productName: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  productImage: string;

  @Prop()
  ratings: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categories:string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
