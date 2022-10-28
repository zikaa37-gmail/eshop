import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/auth.service';
import { ProductsService } from 'src/app/products/products.service';
import { OrderItem } from 'src/app/products/products.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthenticated$!: Observable<boolean>;
  @ViewChild('notificationsPanel') notificationsPanel!: ElementRef;
  basket$: Observable<OrderItem[]> = this.productsService.basket$;
  basketNumber = 0;

  constructor(
    private authService: AuthService,
    public router: Router,
    private productsService: ProductsService
  ) {
    this.basket$.subscribe((res) => this.calc(res));
  }

  ngOnInit(): void { }

  logout() {
    this.authService.logout();
    this.authService.redirectToLogin();
  }

  calc(basket: any) {
    this.basketNumber = 0;
    basket.forEach((element: OrderItem) => {
      this.basketNumber += element.qty;
    });
  }


}
