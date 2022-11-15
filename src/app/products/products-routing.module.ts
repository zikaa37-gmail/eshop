import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { ProductsRouteGuard } from './products.route.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ProductsRouteGuard],
    children: [
      {
        path: 'search',
        component: ProductsSearchComponent
      },
      {
        path: 'category/:name',
        component: ProductsListComponent
      },
      {
        path: 'preview/:barcode',
        component: ProductPreviewComponent
      },
      {
        path: 'basket',
        component: BasketComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }

export enum ProductsFilter {
  'my' = 'my',
  'all' = 'all',
  'subscribed' = 'subscribed',
}
