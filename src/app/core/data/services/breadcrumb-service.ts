import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbRouterService, IBreadcrumbItem } from '@coreui/angular-pro';
import { Observable, map, tap } from 'rxjs';

const ROUTE_MAP: ReadonlyMap<string, string> = new Map<string, string>([
  ['/', 'BREADCRUMBS.DASHBOARD'],
  ['//user', 'BREADCRUMBS.LIST_USER'],
  ['//user//new', 'BREADCRUMBS.NEW_USER'],
  ['//role', 'BREADCRUMBS.LIST_ROLE'],
  ['//role//new', 'BREADCRUMBS.NEW_ROLE'],
]);

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService extends BreadcrumbRouterService {
  constructor(router: Router, activatedRoute: ActivatedRoute) {
    super(router, activatedRoute);
  }

  getBreadcrumbItems(): Observable<IBreadcrumbItem[]> {
    return this.breadcrumbs$.pipe(
      tap((breadcrumbs) =>
        console.log('GOT BREADCRUMBS FROM ROUTER => ', breadcrumbs)
      ),
      map((breadcrumbs) =>
        breadcrumbs
          .map((breadcrumbsItem) => ({
            ...breadcrumbsItem,
            label: ROUTE_MAP.get(String(breadcrumbsItem.url)) ?? '',
          }))
          .filter((breadcrumbsItem) => breadcrumbsItem.label.length > 0)
      )
    );
  }
}
