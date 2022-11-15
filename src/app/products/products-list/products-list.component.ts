import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { Product } from '../products.models';
import { Location } from '@angular/common';
import { ProductsQuery } from '../state/products.query';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  products$: Observable<Product[]> = this.productsQuery.getProducts()
    .pipe(
      filter(res => !!res)
    );;
  filteredProducts$: Observable<Product[]> = this.products$.pipe(
    map(products => products.filter(p => p.categoryName === this.route.snapshot.params['name']))
  );
  isLoading$ = this.loaderService.isLoading$;

  constructor(
    private loaderService: LoaderService,
    private productsQuery: ProductsQuery,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  back(): void {
    this.location.back()
  }

}
