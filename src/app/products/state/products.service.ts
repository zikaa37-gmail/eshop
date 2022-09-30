import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from './product.model';
import { ProductsStore } from './products.store';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  apiUrl = environment.apiUrl;

  constructor(private productsStore: ProductsStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Product[]>('https://api.com').pipe(tap(entities => {
      this.productsStore.set(entities);
    }));
  }

  getProducts(search: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products?${search}`).pipe(
      map((products: any) => products),
      // tap(res => this.products$.next(res))
    )
  }

  // getCategories(search: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/categories`).pipe(
  //     map((categories: any) => categories),
  //     tap(res => this.products$.next(res))
  //   )
  // }

  // getProductByName(name: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/products/${name}`).pipe(
  //     map((products: any) => products),
  //     tap(res => this.products$.next(res))
  //   )
  // }

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
