import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { Product } from "../products.models";

export interface ProductsState {
  products: Product[];
}

export function CreateProductsInitialState() {
  return {
    products: []
  }
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'products' })
export class ProductsStore extends Store<ProductsState>{

  constructor() {
    super(CreateProductsInitialState());
  }
}
