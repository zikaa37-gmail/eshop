import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { Category } from "../categories.models";

export interface CategoriesState {
  categories: Category[];
  isLoaded: boolean;
}

export function getInitialState() {
  return {
    categoriees: [],
    isLoaded: false
  }
}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'categories' })
export class CategoriesStore extends Store<CategoriesState>{

  constructor() {
    super(getInitialState());
  }

}
