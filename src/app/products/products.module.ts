import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductsListComponent } from './products-list/products-list.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductPreviewComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
