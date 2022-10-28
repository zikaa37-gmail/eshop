import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { OrderItem, Product } from '../products.models';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>;
  basket$: Observable<OrderItem[]> = this.productsService.basket$;

  constructor(
    private productsService: ProductsService,
    private location: Location,
  ) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void { }

  back(): void {
    this.location.back()
  }

  addToBasket(product: Product) {
    const orderItem: OrderItem = {
      id: undefined,
      customerId: 1,
      product: product,
      qty: 1,
      orderDate: new Date(),
    }
    this.productsService.addToBasket(orderItem)
  }

  removeFromBasket(product: Product) {
    this.productsService.removeFromBasket(product);
  }

  order(basket: OrderItem[]) {
    this.productsService.order(basket).pipe(takeUntil(this.unsubscribe$)).subscribe(order => {
      console.log('ORDER', order);
    });
  }
}
