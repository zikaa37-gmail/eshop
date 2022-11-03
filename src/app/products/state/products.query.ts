import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { Observable } from "rxjs";
import { Product } from "../products.models";
import { ProductsState, ProductsStore } from "./products.store";

@Injectable({ providedIn: 'root' })
export class ProductsQuery extends Query<ProductsState>{

  constructor(protected override store: ProductsStore) {
    super(store);
  }

  getProducts(): Observable<Product[]> {
    return this.select(state => state.products);
  }
}
