import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategoriesRouteGuard } from './categories.route.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [CategoriesRouteGuard],
    component: CategoriesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
