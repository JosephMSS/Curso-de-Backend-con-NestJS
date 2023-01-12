import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  /**
   * Todas las rutas no dinámicas se colocan al principio, las dinámicas van de secundarias
   *  */
  @Get('filter')
  getCategoryFilter(): string {
    return `Filter`;
  }
  /**
   * O podemos recibir el el objeto
   * params con todos los datos
   * @param params
   * @returns
   */
  @Get(':categoryId')
  getCategory(@Param() params: any): string {
    return `Category ID:${params.categoryId}`;
  }
}
