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