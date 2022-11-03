import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from './categories.models';
import { ErrorHandlerService } from '../shared/services/error-handler.service';
import { CategoriesStore } from './state/categories.store';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiUrl = environment.apiUrl;

  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService,
    private categoriesStore: CategoriesStore
  ) { }

  getCategories(): Observable<Category[]> {
    this.categoriesStore.setLoading(true);
    return this.http.get<Category[]>(`${this.apiUrl}/categories`)
      .pipe(
        tap(result => {
          this.categoriesSubject.next(result);
          this.categoriesStore.setLoading(false);
        }),
        tap(categories => this.categoriesStore.update({ categories })),
        shareReplay(),
        catchError(err => this.errorHandlerService.handleError(err))
      )
  }

}
