import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SessionStore } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionService {
  endpoint!: string;

  constructor(private sessionStore: SessionStore, private http: HttpClient) {
  }

  login(creds: any) {
    return this.http.post(this.endpoint, creds).pipe(
      tap(user => this.sessionStore.update(user))
    )
  }
}
