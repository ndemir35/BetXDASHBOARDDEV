import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '@betx/core/base-api-service';
import { Observable, of } from 'rxjs';
import { environment } from '~/environments/environment';
import { UserLoginModel, UserRegisterModel } from '../interfaces';
import { ApiResponse } from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class IdentityService extends BaseApiService {
  private _forgotPasswordUsername = '';

  constructor(_http: HttpClient) {
    super(_http);
  }

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

  login(userLoginModel: UserLoginModel): Observable<ApiResponse> {
    return this.post(
      `${environment.identityServiceUrl}/user/login`,
      userLoginModel
    );
  }

  sendChangePasswordLink() {
    throw new Error('Method not implemented.');
  }

  register(user: UserRegisterModel): Observable<ApiResponse> {
    user.userTypeId = '1';
    return this.post(`${environment.identityServiceUrl}/user/register`, user);
  }
}
