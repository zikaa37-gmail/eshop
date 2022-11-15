import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
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

  // resetSearchValue(event: any) {
  //   this.productsService.searchSubject.next(event);
  // }

  back(): void {
    this.location.back();
  }
}
