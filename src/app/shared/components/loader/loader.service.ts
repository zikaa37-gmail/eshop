import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, finalize, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() { }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null) // napravi novi Observable koji trigeruje ukljucivanje loadera. On ce se sam komplitovati odmah i pokreni novi observable
      .pipe(
        tap(() => this.loaderOn()), // prikazi loader
        concatMap(() => obs$), // to start emiting values from input observable obs$ // takes initial observable (null) and transform it to the new value (obs$)
        finalize(() => this.loaderOff()) // kad se komplituje obs$, ugasi loader
      )
  }

  loaderOn() {
    this.loadingSubject.next(true);
  }

  loaderOff() {
    this.loadingSubject.next(false);
  }

}
