import { Routes } from '@angular/router';
import { IdentityComponent } from './identity.component';

export const IDENTITY_ROUTES: Routes = [
  {
    path: '',
    component: IdentityComponent,
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
