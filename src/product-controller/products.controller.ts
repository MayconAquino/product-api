import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from '../product-dto/ProductDto';
import { ProductsService } from '../product-service/ProductsService';
import { Product } from 'src/product-schema/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }
}
