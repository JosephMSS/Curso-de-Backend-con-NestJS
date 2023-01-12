import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * *Los decoradores definen el
 * *comportamiento de las
 * *funciones en la clase
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  /**
   * Las rutas pueden contener o no un slash,
   * nest las va a poder resolver sin
   * problemas
   * @returns string
   */
  @Get('nueva-ruta')
  getHelloV2(): string {
    return 'nueva ruta';
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
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string): string {
    return `Product ID:${productId}`;
  }
  /**
   * Todas las rutas no dinámicas se colocan al principio, las dinámicas van de secundarias
   *  */
  @Get('categories/filter')
  getCategoryFilter(): string {
    return `Filter`;
  }
  /**
   * O podemos recibir el el objeto
   * params con todos los datos
   * @param params
   * @returns
   */
  @Get('categories/:categoryId')
  getCategory(@Param() params: any): string {
    return `Category ID:${params.categoryId}`;
  }
  @Get('people/:personId/category/:categoryId')
  getCategoryByPerson(
    @Param('categoryId') categoryId: string,
    @Param('personId') personId: string,
  ): string {
    return `Category ID:${categoryId}  ${personId}`;
  }
  /**
   *
   * @param limit Infiere su tipo si definimos un valor por defecto
   * @param offset
   * @param brand Definimos su tipo, ya que, no asignamos un valor por defecto
   */
  @Get('products')
  findAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 20,
    @Query('brand') brand: string,
  ) {
    return `Products : Limit:${limit} Offset:${offset}`;
  }
}
