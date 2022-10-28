import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { Product } from '../products.models';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  name = this.route.snapshot.params['name'];
  products$: Observable<Product[]> = this.productsService.products$;//Subject;
  filteredProducts$!: Observable<Product[]>;
  isLoading$ = this.loaderService.isLoading$;

  constructor(
    private loaderService: LoaderService,
    public productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.filteredProducts$ = this.products$.pipe(
      map(products => products.filter(p => p.categoryName === this.name))
    )
  }

  navigateTo(barcode: string) {
    this.router.navigate(['products/preview', barcode])
  }

  back(): void {
    this.location.back()
  }

}
