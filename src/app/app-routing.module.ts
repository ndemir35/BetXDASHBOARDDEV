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
    children: [
      {
        path: 'user',
        loadChildren: () =>
          import('./views/identity/identity.routes').then(
            (m) => m.IDENTITY_ROUTES
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
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
