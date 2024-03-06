import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document; //Essa linha define um tipo ProductDocument que é uma interseção entre a classe Product e a interface Document do Mongo

@Schema() //Funciona como o @Entity, diz que essa classe sera criada no banco com os campos @Prop
export class Product {
  @Prop() //Mapeia os campos no mongo associado a classe Product
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// No geral, essa classe e seu schema associado fornecem uma representação
//  em TypeScript de um documento MongoDB para a entidade Product.
//  Ela facilita a interação com o MongoDB usando o Mongoose dentro de um aplicativo NestJS.
