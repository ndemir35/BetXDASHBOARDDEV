import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ToastMessage } from './data';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toastStream: Subject<ToastMessage> = new Subject();

  constructor() {}

  get toastStream$() {
    return this._toastStream.asObservable();
  }

  show(message: ToastMessage) {
    this._toastStream.next(message);
  }
}
