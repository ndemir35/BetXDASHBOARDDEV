import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '@betx/core/base-api-service';
import { Observable, of } from 'rxjs';
import { environment } from '~/environments/environment';
import { UserLoginModel, UserRegisterModel } from '../interfaces';
import {
  ApiResponse,
  UserLoginResponse,
  UserLogoutResponse,
} from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class IdentityService extends BaseApiService {
  constructor(_http: HttpClient) {
    super(_http);
  }

  logout(): Observable<ApiResponse<UserLogoutResponse>> {
    return this.post(`${environment.identityServiceUrl}/user/logout`, {});
  }

  isLoggedIn(): Observable<boolean> {
    return of(true);
  }

  login(
    userLoginModel: UserLoginModel
  ): Observable<ApiResponse<UserLoginResponse>> {
    return this.post<UserLoginModel, UserLoginResponse>(
      `${environment.identityServiceUrl}/user/login`,
      userLoginModel
    );
  }

  sendChangePasswordLink() {
    throw new Error('Method not implemented.');
  }

  register(user: UserRegisterModel): Observable<ApiResponse<any>> {
    user.userTypeId = '1';
    return this.post(`${environment.identityServiceUrl}/user/register`, user);
  }
}
