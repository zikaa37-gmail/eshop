import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

export class CategoriesComponent implements OnInit {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  categories$!: Observable<Category[]>;

  constructor(
    private loaderService: LoaderService,
    public categoriesService: CategoriesService,
    private categoriesQuery: CategoriesQuery,
    private router: Router
  ) { }

  ngOnInit(): void {
    (this.categories$ =
      this.categoriesQuery.getCategories()
        .pipe(
          filter((res) => !!res)
        ))
  }

  navigateTo(name: string) {
    this.router.navigate([`products/category/${name}`])
  }

}
