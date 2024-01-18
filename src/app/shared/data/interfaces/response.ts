import { UserType } from "./types";

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

export interface UserLogoutResponse {}
