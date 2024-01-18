import { Injectable } from '@angular/core';
import { StorageItem, UserType } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  authToken = new StorageItem<string>('authToken');
  userType = new StorageItem<UserType>('userType');
}
