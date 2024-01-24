import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot
} from '@angular/router';

export const canActivateDashboard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return true;
};
