import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isMobileScreen$ = new BehaviorSubject<boolean>(false);

  constructor() { this.getScreenSize(); }

  getScreenSize() {
    const isMobileScreen = !!(window.innerWidth < 768);
    this.isMobileScreen$.next(isMobileScreen);
  }
}
