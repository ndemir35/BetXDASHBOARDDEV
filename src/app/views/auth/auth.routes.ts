import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';
import { AuthComponent } from './auth.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        pathMatch: 'full',
        component: LoginFormComponent,
      },
      {
        path: 'password-change',
        pathMatch: 'full',
        component: PasswordChangeFormComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
  },
];
