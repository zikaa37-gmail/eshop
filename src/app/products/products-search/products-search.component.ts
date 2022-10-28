import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
  q = '';
  products$: Observable<Product[]> = this.productsService.getProducts(`q=${this.q}`);

  constructor(
    private loaderService: LoaderService,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {
    this.route.params.subscribe(params => {
      this.q = params['q'];
      this.products$ = this.productsService.getProducts(`q=${this.q}`);

    });
  }

  navigateTo(barcode: string) {
    this.router.navigate(['products/preview', barcode])
  }

  back(): void {
    this.location.back();
  }
}
