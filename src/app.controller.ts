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

  @Get('people/:personId/category/:categoryId')
  getCategoryByPerson(
    @Param('categoryId') categoryId: string,
    @Param('personId') personId: string,
  ): string {
    return `Category ID:${categoryId}  ${personId}`;
  }
}
