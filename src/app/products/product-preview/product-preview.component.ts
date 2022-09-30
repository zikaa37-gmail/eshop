import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { Product } from '../products.models';
import { ProductsService } from '../products.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  barcode = this.route.snapshot.params['barcode'];
  product$: Observable<Product[]> = this.productsService.getProductByBarcode(this.barcode);

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private loaderService: LoaderService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.loaderService.isLoading$.next(true);
  }

  back(): void {
    this.location.back()
  }
}
