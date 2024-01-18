import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./role.component').then((m) => m.RoleComponent),
    children: [],
  },
];

export const ROLE_ROUTES = routes;

