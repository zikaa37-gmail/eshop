import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./categories/categories.module').then(
        (m) => m.CategoriesModule
      ),

  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(
        (m) => m.ProductsModule
      ),

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/categories'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/categories'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
