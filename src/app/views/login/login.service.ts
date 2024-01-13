import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor() { }

    login(): Observable<boolean> {
        return of(true);
    }
}