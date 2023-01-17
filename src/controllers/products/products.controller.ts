import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
  Body,
  Delete,
  HttpCode,
  Put,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes';
import { ProductsService } from 'src/services/products/products.service';
/**
 * *El controlador al recibir el parámetro 'products'
 * *indica que las rutas que contiene van a
 * *pertenecer al dominio products/...
 */
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  /**
   *
   * @param limit Infiere su tipo si definimos un valor por defecto
   * @param offset
   * @param brand Definimos su tipo, ya que, no asignamos un valor por defecto
   */
  @Get()
  findAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 20,
    @Query('brand') brand: string,
  ) {
    const productList = this.productsService.findAll();
    return productList;
  }
  /**
   ** Se recomienda que las rutas estén en plural
   */
  /**
   * Podemos recibir el parámetro directamente con
   * el decorador @Param y pasando como parámetro
   * el nombre de la variable
   * @param productId
   * @returns
   */
  @Get(':productId')
  @HttpCode(HttpStatus.FOUND)

  /**
   * *Los pipes funcionan pra transformar las variables a los datos que necesitamos
   */
  findOne(@Param('productId', ParseIntPipe) productId: number) {
    const product = this.productsService.findOne(productId);
    console.log(
      '🚀 ~ file: products.controller.ts:51 ~ ProductsController ~ findOne ~ product',
      product,
    );
    return product;
  }
  @Post()
  create(@Body() payload: any) {
    const newProduct = this.productsService.create(payload);
    return { newProduct };
  }
  @Put(':productId')
  update(
    @Body() payload: any,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.productsService.update(payload, productId);
  }
  @Delete(':productId')
  delete(@Param('productId') productId: string) {
    return { productId };
  }
}
