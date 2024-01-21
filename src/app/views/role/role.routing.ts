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
        path: 'new',
        loadComponent: () =>
          import('./ui/components/new/new.component').then(
            (m) => m.NewComponent
          ),
      },
      {
        path: 'edit',
        loadComponent: () =>
          import('./ui/components/edit/edit.component').then(
            (m) => m.EditComponent
          ),
      },
      {
        path: 'detail/:id',
        loadChildren: () =>
          import('./ui/components/detail/detail.routes').then(
            (m) => m.ROLE_DETAIL_ROUTES
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
