import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  /**
   * Logs the user out of the application.
   *
   * @throws {Error} if the logout process fails
   */
  logout() {
  }

  isLoggedIn(): Observable<boolean> {
    return of(true);
  }

  login(): Observable<boolean> {
    return of(true);
  }
}
