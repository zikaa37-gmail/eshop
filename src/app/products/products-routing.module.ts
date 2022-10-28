import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { BasketComponent } from './basket/basket.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsSearchComponent } from './products-search/products-search.component';
// import { AuthGuard } from '../auth/auth.guard';
// import { ProductsDataFormComponent } from './products-data-form/products-data-form.component';
// import { ProductsDetailsComponent } from './products-details/products-details.component';
// import { ProductsFormComponent } from './products-form/products-form.component';
// import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'search/:q',
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
      // {
      //   path: 'edit/:name',
      //   component: ProductsFormComponent
      // },
      // {
      //   path: 'populate/:name',
      //   component: ProductsDataFormComponent
      // },
      // {
      //   path: 'create',
      //   component: ProductsFormComponent
      // },
      // {
      //   path: 'preview/:name',
      //   component: ProductsDetailsComponent
      // },
      // {
      //   path: ':filter',
      //   component: ProductsListComponent
      // },
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
