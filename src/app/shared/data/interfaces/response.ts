export interface ApiResponse<T> {
  status?: number;
  message?: string;
  isSuccessful: boolean;
  errorCode?: string;
  data: T;
}

export interface UserLoginResponse {
  token: string;
  userType: string;
}

export interface UserLogoutResponse {}
