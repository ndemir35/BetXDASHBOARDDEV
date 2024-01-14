import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'new',
        pathMatch: 'full',
        loadComponent: () =>
          import('./views/new/new.component').then((m) => m.NewComponent),
      },
      {
        path: 'list',
        pathMatch: 'full',
        loadComponent: () =>
          import('./views/list/list.component').then((m) => m.ListComponent),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ],
  },
];
