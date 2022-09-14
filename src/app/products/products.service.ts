import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl = environment.apiUrl;
  products$ = new BehaviorSubject<any[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getProducts(search: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products?${search}`).pipe(
      map((products: any) => products),
      tap(res => this.products$.next(res))
    )
  }

  getCategories(search: string): Observable<any> {
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
}
