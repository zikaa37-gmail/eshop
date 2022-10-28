import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

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
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./categories/categories.module').then(
        (m) => m.CategoriesModule
      ),

  },
  {
    path: 'products',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./products/products.module').then(
        (m) => m.ProductsModule
      ),

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/categories'
    // redirectTo: '/login'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/categories'
    // redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
