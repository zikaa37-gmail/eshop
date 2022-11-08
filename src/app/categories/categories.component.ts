import { Component } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Category } from './categories.models';
import { LoaderService } from '../shared/components/loader/loader.service';
import { CategoriesService } from './categories.service';
import { CategoriesQuery } from './state/categories.query';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  categories$: Observable<Category[]> = this.categoriesQuery.getCategories()
    .pipe(
      filter((res) => !!res)
    );

  constructor(
    private loaderService: LoaderService,
    public categoriesService: CategoriesService,
    private categoriesQuery: CategoriesQuery
  ) { }


}
