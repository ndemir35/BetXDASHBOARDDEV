import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./role.component').then((m) => m.RoleComponent),
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./ui/components/list/list.component').then(
            (m) => m.ListComponent
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ],
  },
];

export const ROLE_ROUTES = routes;
