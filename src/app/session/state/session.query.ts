import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';

@Injectable({ providedIn: 'root' })
export class SessionQuery extends Query<SessionState> {
  selectIsLogin$ = this.select('token');
  selectName$ = this.select('name');

  constructor(protected override store: SessionStore) {
    super(store);
  }

}
