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

export interface UserRegisterModel {
  username: string;
  email: string;
  password: string;
  userTypeId: string;
}

export interface UserLoginModel {
  username?: string;
  email?: string;
  password: string;
}

export interface RoleDeleteModel {
  roleId: string;
}

export interface RoleNewModel {
  roleName: string;
  expireDate?: Date;
}

export interface RoleUpdateModel extends RoleDeleteModel, RoleNewModel {}

export interface Role {
  id: string;
  name: string;
  expiresAt?: number;
}

export interface Permission {
  id: string;
  action: string;
  controller: string;
  serviceName: string;
}
