import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from './categories.models';
import { LoaderService } from '../shared/components/loader/loader.service';
import { CategoriesService } from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  isLoading$: Observable<boolean> = this.loaderService.isLoading$;
  categories$: Observable<Category[]> = this.categoriesService.categories$;

  constructor(
    private loaderService: LoaderService,
    public categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.getCategories();
  }

  getCategories() {
    this.categories$ = this.categoriesService.getCategories();
  }

  navigateTo(name: string) {
    this.router.navigate([`products/category/${name}`])
  }

}
