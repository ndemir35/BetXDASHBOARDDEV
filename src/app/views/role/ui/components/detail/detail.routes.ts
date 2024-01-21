import { Routes } from '@angular/router';

export const ROLE_DETAIL_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./detail.component').then((m) => m.DetailComponent),
    children: [
      {
        path: 'users',
        pathMatch: 'full',
        loadComponent: () =>
          import('../users-in-role/users-in-role.component').then(
            (m) => m.UsersInRoleComponent
          ),
      },
      {
        path: 'permissions',
        pathMatch: 'full',
        loadComponent: () =>
          import('../permissions/permissions.component').then(
            (m) => m.PermissionsComponent
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'permissions',
      },
    ],
  },
];
