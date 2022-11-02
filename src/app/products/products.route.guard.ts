import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Product } from "./products.models";

import { ProductsService } from "./products.service";

@Injectable({ providedIn: 'root' })
export class ProductsRouteGuard implements CanActivate {
  categories$: Observable<Product[]> = this.productsService.products$;

  constructor(private productsService: ProductsService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.productsService.getProducts().subscribe();
    return true;
  }

}
