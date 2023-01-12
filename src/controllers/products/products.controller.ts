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

/**
 * *El controlador al recibir el parámetro 'products'
 * *indica que las rutas que contiene van a
 * *pertenecer al dominio products/...
 */
@Controller('products')
export class ProductsController {
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
    return `Products : Limit:${limit} Offset:${offset} Brand:${brand}`;
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
  @HttpCode(HttpStatus.NOT_FOUND)
  findOne(@Param('productId') productId: string): string {
    return `Product ID:${productId}`;
  }
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'create action',
      payload: payload,
    };
  }
  @Put(':productId')
  update(@Body() payload: any, @Param('productId') productId: string) {
    return {
      message: 'create action',
      payload: payload,
      productId,
    };
  }
  @Delete(':productId')
  delete(@Param('productId') productId: string) {
    return { productId };
  }
}
