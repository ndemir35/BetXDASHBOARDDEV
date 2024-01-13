import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _forgotPasswordUsername = '';

  constructor() {}

  set forgotPasswordUsername(username: string) {
    this._forgotPasswordUsername = username;
  }

  get forgotPasswordUsername() {
    return this._forgotPasswordUsername;
  }

  logout() {}

  isLoggedIn(): Observable<boolean> {
    return of(true);
  }

  login(): Observable<boolean> {
    return of(true);
  }

  sendChangePasswordLink() {
    throw new Error('Method not implemented.');
  }
}
