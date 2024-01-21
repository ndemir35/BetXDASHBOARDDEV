import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadcrumbRouterService, IBreadcrumbItem } from '@coreui/angular-pro';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';

const ROUTE_MAP: ReadonlyMap<string, string> = new Map<string, string>([
  ['/', 'BREADCRUMBS.DASHBOARD'],
  ['//user', 'BREADCRUMBS.LIST_USER'],
  ['//user//new', 'BREADCRUMBS.NEW_USER'],
  ['//role', 'BREADCRUMBS.LIST_ROLE'],
  ['//role//new', 'BREADCRUMBS.NEW_ROLE'],
]);

export enum BreadcrumbEntry {
  Dashboard,
  RoleList,
  RoleNew,
  RoleEdit,
  RoleDetail,
  UserList,
  UserNew,
}

const DASHBOARD: IBreadcrumbItem = {
  url: '/dashboard',
  label: 'DASHBOARD.MENU.DASHBOARD',
};
const ROLE_LIST: IBreadcrumbItem = {
  url: '/role/list',
  label: 'VIEW.ROLES.TITLE',
};
const ROLE_NEW: IBreadcrumbItem = {
  url: '/role/new',
  label: 'VIEW.ROLES.NEW.TITLE',
};
const ROLE_EDIT: IBreadcrumbItem = {
  url: '/role/edit',
  label: 'VIEW.ROLES.EDIT.TITLE',
};
const ROLE_DETAIL: IBreadcrumbItem = {
  url: '/role/edit',
  label: 'VIEW.ROLES.DETAIL.TITLE',
};
const USER_LIST: IBreadcrumbItem = {
  url: '/user/list',
  label: 'VIEW.USERS.TITLE',
};
const USER_NEW: IBreadcrumbItem = {
  url: '/user/new',
  label: 'VIEW.USERS.NEW.TITLE',
};

const BREADCRUMBS_MAP: ReadonlyMap<BreadcrumbEntry, IBreadcrumbItem[]> =
  new Map<BreadcrumbEntry, IBreadcrumbItem[]>([
    [BreadcrumbEntry.Dashboard, [DASHBOARD]],
    [BreadcrumbEntry.RoleList, [DASHBOARD, ROLE_LIST]],
    [BreadcrumbEntry.RoleNew, [DASHBOARD, ROLE_LIST, ROLE_NEW]],
    [BreadcrumbEntry.RoleEdit, [DASHBOARD, ROLE_LIST, ROLE_EDIT]],
    [BreadcrumbEntry.RoleDetail, [DASHBOARD, ROLE_LIST, ROLE_DETAIL]],
    [BreadcrumbEntry.UserList, [DASHBOARD, USER_LIST]],
    [BreadcrumbEntry.UserNew, [DASHBOARD, USER_LIST, USER_NEW]],
  ]);

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private active?: BreadcrumbEntry;
  active$ = new BehaviorSubject<IBreadcrumbItem[]>([]);

  setActive(key: BreadcrumbEntry | undefined) {
    this.active = key;
    this.active$.next(this.getActiveBreadcrumbs());
  }

  getActiveBreadcrumbs(): IBreadcrumbItem[] {
    if (!this.active) return [];
    return BREADCRUMBS_MAP.get(this.active)!;
  }
}
