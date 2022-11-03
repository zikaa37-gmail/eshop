import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, take } from "rxjs";
import { Category } from "./categories.models";
import { CategoriesService } from "./categories.service";

@Injectable({ providedIn: 'root' })
export class CategoriesRouteGuard implements CanActivate {
  categories$: Observable<Category[]> = this.categoriesService.categories$;

  constructor(private categoriesService: CategoriesService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.categoriesService.getCategories().pipe(take(1)).subscribe();
    return true;
  }

}
