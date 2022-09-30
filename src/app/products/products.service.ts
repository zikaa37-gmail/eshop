import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../shared/components/loader/loader.service';
import { Product } from './products.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = environment.apiUrl;
  products$ = new BehaviorSubject<any[]>([]);

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  getProducts(search: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products?${search}`).pipe(
      map((products: any) => {
        this.loaderService.isLoading$.next(false)
        return products;
      }),
      tap(res => this.products$.next(res)),
    )
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`).pipe(
      map((categories: any) => categories),
      tap(res => this.products$.next(res))
    )
  }

  getProductByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products/${name}`).pipe(
      map((products: any) => products),
      tap(res => this.products$.next(res))
    )
  }

  getProductByBarcode(barcode: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products?barcode=${barcode}`).pipe(
      map((product: Product[]) => {
        this.loaderService.isLoading$.next(false);
        return product;
      }),
      // tap(res => this.products$.next(res))
    )
  }
}
