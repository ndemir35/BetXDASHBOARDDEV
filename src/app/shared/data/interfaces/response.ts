import { UserType } from './enums';

export interface ApiResponse<T> {
  status?: number;
  message?: string;
  isSuccessful: boolean;
  errorCode?: string;
  data: T;
}

export interface UserLoginResponse {
  token: string;
  userType: UserType;
}

export interface RoleListResponse {
  roleId: string;
  roleName: string;
  expireDate?: number;
}

export interface UserLogoutResponse {}
