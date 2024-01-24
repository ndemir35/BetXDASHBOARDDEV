import { Injectable } from '@angular/core';
import { StorageItem, UserType } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  userType = new StorageItem<UserType>('userType');
}
