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

export interface Role {
  id: string;
  name: string;
  expiresAt?: number;
}

