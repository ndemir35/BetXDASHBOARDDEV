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
  // {
  //   path: 'login',
  //   pathMatch: 'full',
  //   loadComponent: () =>
  //     import('./views/login/login.component').then((x) => x.LoginComponent),
  // },
  // {
  //   path: 'password-change',
  //   pathMatch: 'full',
  //   loadComponent: () =>
  //     import('./views/password-change/password-change.component').then(
  //       (x) => x.PasswordChangeComponent
  //     ),
  // },
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [canActivateDashboard],
    data: {
      title: $localize`Home`,
    },
    children: [
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
