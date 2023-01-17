import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductsService {
  private counter = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla description',
      price: 200,
      image: '',
      stock: 20,
    },
  ];
  findAll() {
    return this.products;
  }
  findOne(productId: number) {
    return this.products.find((product) => {
      if (product.id === productId) {
        return product;
      }
    });
  }
  create(payload: any) {
    this.counter++;
    const newProduct = {
      id: this.counter,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(payload: any, productId: number) {
    let product = this.findOne(productId);
    if (!product) {
      return null;
    }
    product = { ...product, ...payload };
    const index = this.products.findIndex(
      (product) => product.id === productId,
    );
    this.products[index] = product;
    return product;
  }
}
