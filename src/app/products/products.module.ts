import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BasketComponent } from './basket/basket.component';
import { ProductsSearchComponent } from './products-search/products-search.component';



@NgModule({
  declarations: [
    ProductPreviewComponent,
    ProductsListComponent,
    BasketComponent,
    ProductsSearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
