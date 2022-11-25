import { Component } from '@angular/core';
import { filter, map, Observable, switchMap } from 'rxjs';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { Product } from '../products.models';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  q = this.productsService.search$;
  products$: Observable<Product[]> = this.q.pipe(
    map(q => q),
    filter(res => res !== null),
    switchMap(q => {
      const searchValue = q ? `q=${q}` : null;
      return this.productsService.getProducts(searchValue);
    })
  )
  searchValue!: string | null;

  constructor(
    private loaderService: LoaderService,
    private productsService: ProductsService,
    private location: Location
  ) { }


  back(): void {
    this.location.back();
  }
}
