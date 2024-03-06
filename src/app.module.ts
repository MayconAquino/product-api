import { Module } from '@nestjs/common';
import { ProductsService } from './product-service/ProductsService';
import { ProductsController } from './product-controller/products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product-schema/product.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/products-db'),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class AppModule {}
