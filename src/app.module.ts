import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';

@Module({
  imports: [],
  controllers: [AppController, OrdersController, UsersController, CustomersController, CategoriesController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
