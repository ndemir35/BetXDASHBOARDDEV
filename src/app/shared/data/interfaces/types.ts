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
