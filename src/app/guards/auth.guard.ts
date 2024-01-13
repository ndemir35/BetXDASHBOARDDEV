import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenticationService } from "../shared/services/authentication.service";
import { inject } from "@angular/core";
import { catchError, map, tap } from "rxjs/operators";
import { of } from "rxjs";

export const canActivateDashboard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const authService = inject(AuthenticationService);
    const router = inject(Router);

    return authService.isLoggedIn().pipe(
        tap(isLoggedIn => {
            if (!isLoggedIn) {
                router.navigateByUrl('login');
            }
        })
    )
};