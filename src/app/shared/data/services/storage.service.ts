import { Injectable } from '@angular/core';

const KEY_AUTH_TOKEN = 'authToken';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setAuthToken(token: string) {
    localStorage.setItem(KEY_AUTH_TOKEN, token);
  }
  getAuthToken(): string | null {
    return localStorage.getItem(KEY_AUTH_TOKEN);
  }
  removeAuthToken() {
    localStorage.removeItem(KEY_AUTH_TOKEN);
  }
}
