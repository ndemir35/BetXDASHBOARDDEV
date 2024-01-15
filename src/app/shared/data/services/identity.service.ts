import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { UserRegisterModel } from '../models';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '~/environments/environment';
import { ApiResponse } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class IdentityService {
  private _forgotPasswordUsername = '';

  constructor(private _http: HttpClient) {}

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

  register(user: UserRegisterModel): Observable<ApiResponse> {
    return this._http
      .post(`${environment.identityServiceUrl}/user/register`, user)
      .pipe(
        catchError((e) => {
          return of({
            message: e.message,
            status: e.status,
            isSuccessful: false,
          });
        }),
        map(
          (response: any) =>
            ({
              message: response.message,
              status: response.status,
              isSuccessful: response.isSuccessful,
            } as ApiResponse)
        )
      );
  }
}
