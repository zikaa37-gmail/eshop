import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { mapTo, Observable, take } from "rxjs";
import { CategoriesService } from "./categories.service";

@Injectable({ providedIn: 'root' })
export class CategoriesRouteGuard implements CanActivate {

  constructor(private categoriesService: CategoriesService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.categoriesService.getCategories().pipe(take(1), mapTo(true));
  }

}
