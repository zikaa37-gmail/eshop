import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { mapTo, Observable, take } from "rxjs";
import { ProductsService } from "./products.service";

@Injectable({ providedIn: 'root' })
export class ProductsRouteGuard implements CanActivate {

  constructor(private productsService: ProductsService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.productsService.getProducts().pipe(take(1), mapTo(true));
  }

}
