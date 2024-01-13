import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {

    constructor() { }

    isLoggedIn(): Observable<boolean> {
        return of(true);
    };

    login(): Observable<boolean> {
        return of(true);
    }
}