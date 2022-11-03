import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { OrderItem, Product } from '../products.models';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common';
import { ProductsQuery } from '../state/products.query';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  barcode = this.route.snapshot.params['barcode'];
  products$!: Observable<Product[]>;
  basket$: Observable<OrderItem[]> = this.productsService.basket$;
  selectedProduct$!: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private productsQuery: ProductsQuery,
    private loaderService: LoaderService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.products$ = this.productsQuery.getProducts()
      .pipe(
        filter(res => !!res)
      );
    this.selectedProduct$ = this.products$.pipe(
      map(products => products.find(p => p.barcode === this.barcode)!)
    )
  }

  back(): void {
    this.location.back()
  }

  addToBasket(product: Product) {
    const orderItem: OrderItem = {
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
}
