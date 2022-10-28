import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, shareReplay, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../products/products.models';
import { ErrorHandlerService } from '../shared/services/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  apiUrl = environment.apiUrl;

  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) { this.getCategories().subscribe() }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/categories`)
      .pipe(
        tap(result => {
          this.categoriesSubject.next(result);
        }),
        shareReplay(),
        catchError(err => this.errorHandlerService.handleError(err))
      )
  }

}
