import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { Observable } from "rxjs";
import { Category } from "../categories.models";
import { CategoriesState, CategoriesStore } from "./categories.store";

@Injectable({ providedIn: 'root' })
export class CategoriesQuery extends Query<CategoriesState>{

  constructor(protected override store: CategoriesStore) {
    super(store);
  }

  getCategories(): Observable<Category[]> {
    return this.select(state => state.categories);
  }

  getLoaded(): Observable<boolean> {
    return this.select(state => state.isLoaded);
  }

  getLoading(): Observable<boolean> {
    return this.selectLoading();
  }
}
