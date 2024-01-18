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

export class StorageItem<T> {
  private _key: string = '';

  constructor(key: string) {
    this._key = key;
  }

  get value(): T {
    return localStorage.getItem(this._key) as T;
  }

  set value(value: T) {
    localStorage.setItem(this._key, value as string);
  }

  remove(): void {
    localStorage.removeItem(this._key);
  }
}

export enum UserType {
  Admin = 'Admin',
  Operator = 'Operator',
  Customer = 'Customer',
  Player = 'Player',
}
