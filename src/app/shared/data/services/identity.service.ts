import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseIdentityService } from '@betx/core/data/services/base-identity-service';
import { Observable, of } from 'rxjs';
import { UserLoginModel, UserRegisterModel } from '../interfaces';
import {
  ApiResponse,
  UserLoginResponse,
  UserLogoutResponse,
} from '../interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class IdentityService extends BaseIdentityService {
  constructor(_http: HttpClient) {
    super(_http);
  }

  logout(): Observable<ApiResponse<UserLogoutResponse>> {
    return this.post(`/user/logout`, {});
  }

  isLoggedIn(): Observable<boolean> {
    return of(true);
  }

  login(
    userLoginModel: UserLoginModel
  ): Observable<ApiResponse<UserLoginResponse>> {
    return this.post<UserLoginModel, UserLoginResponse>(
      `/user/login`,
      userLoginModel
    );
  }

  sendChangePasswordLink() {
    throw new Error('Method not implemented.');
  }

  register(user: UserRegisterModel): Observable<ApiResponse<any>> {
    user.userTypeId = '1';
    return this.post(`/user/register`, user);
  }
}
