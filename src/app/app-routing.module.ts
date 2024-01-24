import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './containers';
import { canActivateDashboard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [canActivateDashboard],
    canActivateChild: [canActivateDashboard],
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./views/users/users.routes').then((m) => m.USERS_ROUTES),
      },
      {
        path: 'role',
        loadChildren: () =>
          import('./views/role/role.routing').then((m) => m.ROLE_ROUTES),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.routes').then(
            (m) => m.DASHBOARD_ROUTES
          ),
      },
      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
