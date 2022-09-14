import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Credentials, Roles } from './auth.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private credentials!: Credentials;
  public isAuthenticated$ = new BehaviorSubject<boolean>(false);
  public credentials$ = new BehaviorSubject<Credentials>(new Credentials());

  constructor(private router: Router) { }

  login(username: string, password: string): boolean {
    if (username !== 'test@test.com') {
      this.isLoggedIn = false;
      this.isAuthenticated$.next(false);
      localStorage.setItem('isAuthenticated', JSON.stringify(false));
      return false;
    }

    this.credentials = {
      username: 'test@test.com',
      initials: 'DC',
      organization: 'Department Head',
      role: Roles.Producer
    }


    this.credentials$.next(this.credentials);
    this.isLoggedIn = true;
    this.isAuthenticated$.next(true);
    localStorage.setItem('user', JSON.stringify(this.credentials));
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    return true;
  }

  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  public redirectToLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.isAuthenticated$.next(false);
    this.isLoggedIn = false;
  }

  getCredentials(): Credentials {
    return this.credentials;
  }

  getAuthToken() {
    return 'eyJhbGciOiJIUzI1NiJ9.eyJhY3RvclR5cGUiOiJVU0VSIiwiYWN0b3JJZCI6ImRhdGFodWIiLCJ0eXBlIjoiUEVSU09OQUwiLCJ2ZXJzaW9uIjoiMiIsImV4cCI6MTY2ODQyODYwNSwianRpIjoiZGViYzFhYzUtOWZhNS00ZWNiLThlMmEtNTk0NGZmNWMyY2ZlIiwic3ViIjoiZGF0YWh1YiIsImlzcyI6ImRhdGFodWItbWV0YWRhdGEtc2VydmljZSJ9.Cs8VTsBkMM384H4MI3jjMuJAtLsIZ7YKYlq3q_E9-ng';
  }

}


