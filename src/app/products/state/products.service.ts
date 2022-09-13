import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Product } from './product.model';
import { ProductsStore } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(private productsStore: ProductsStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Product[]>('https://api.com').pipe(tap(entities => {
      this.productsStore.set(entities);
    }));
  }

  add(product: Product) {
    this.productsStore.add(product);
  }

  update(id: any, product: Partial<Product>) {
    this.productsStore.update(id, product);
  }

  remove(id: ID) {
    this.productsStore.remove(id);
  }

}
