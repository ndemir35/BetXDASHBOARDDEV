import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { StorageService } from '@betx/shared';

export const canActivateDashboard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const storageService = inject(StorageService);
  const router = inject(Router);
  const authToken = storageService.authToken.value;

  if (!authToken?.length) {
    router.navigateByUrl('auth/login');
    return false;
  }

  return true;
};
