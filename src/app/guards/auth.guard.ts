import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { tap } from "rxjs/operators";
import { IdentityService } from "../shared/data/services/identity.service";

export const canActivateDashboard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
) => {
    const authService = inject(IdentityService);
    const router = inject(Router);

    return authService.isLoggedIn().pipe(
        tap(isLoggedIn => {
            if (!isLoggedIn) {
                router.navigateByUrl('login');
            }
        })
    )
};