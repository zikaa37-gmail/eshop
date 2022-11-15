import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, shareReplay, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../shared/services/error-handler.service';
import { OrderItem, Product } from './products.models';
import { ProductsStore } from './state/products.store';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly apiUrl = environment.apiUrl;

  searchSubject = new BehaviorSubject<string | null>(null);
  search$ = this.searchSubject.asObservable();

  selectedProduct$ = new Subject<Product>();
  basket$ = new BehaviorSubject<OrderItem[]>([]);
  orderItems: OrderItem[] = [];

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private productsStore: ProductsStore
  ) { }


  getProducts(search: string | null = null): Observable<Product[]> {
    const searchString = search ? ('?' + search) : '';
    return this.http.get<Product[]>(`${this.apiUrl}/products${searchString}`)
      .pipe(
        tap(products => this.productsStore.update({ products })),
        shareReplay(),
        catchError(err => this.errorHandlerService.handleError(err))
      )
  }

  getProductByName(name: string): Observable<Product> {
    return this.http.get<Product[]>(`${this.apiUrl}/products/${name}`).pipe(
      map((product: Product[]) => {
        return product[0];
      }),
      tap(res => this.selectedProduct$.next(res)),
      shareReplay(),
      catchError(err => this.errorHandlerService.handleError(err))
    )
  }

  getProductByBarcode(barcode: string): Observable<Product> {
    return this.http.get<Product[]>(`${this.apiUrl}/products?barcode=${barcode}`).pipe(
      map((product: Product[]) => {
        return product[0];
      }),
      tap(res => this.selectedProduct$.next(res)),
      shareReplay(),
      catchError(err => this.errorHandlerService.handleError(err))
    )
  }

  addToBasket(newOrderItem: OrderItem) {
    const orderItem: OrderItem | undefined = this.orderItems.find(item => item.product.barcode === newOrderItem.product.barcode);
    if (orderItem) {
      orderItem.qty += 1;
    } else {
      this.orderItems.push(newOrderItem);
    }
    this.basket$.next(this.orderItems);
  }

  removeFromBasket(product: Product) {
    const orderItem: OrderItem | undefined = this.orderItems.find(item => item.product.barcode === product.barcode)!;
    if (!orderItem) {
      return;
    }
    else if (orderItem && orderItem.qty > 1) {
      orderItem.qty -= 1;
    } else {
      const index = this.orderItems.indexOf(orderItem);
      this.orderItems.splice(index, 1);
    }

    this.basket$.next(this.orderItems);
  }

  order(basket: OrderItem[]): Observable<any> {
    const body = { "orders": basket }
    return this.http.post<OrderItem[]>(`${this.apiUrl}/orders`, body)
      .pipe(
        shareReplay(),
        catchError(err => this.errorHandlerService.handleError(err))
      );

  }


}
