import { Routes } from '@angular/router';
import { LoginFormComponent } from './ui/login-form/login-form.component';
import { PasswordChangeFormComponent } from './ui/password-change-form/password-change-form.component';
import { AuthComponent } from './auth.component';
import { ForgotPasswordFormComponent } from './ui/forgot-password-form/forgot-password-form.component';

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
        path: 'forgot-password',
        pathMatch: 'full',
        component: ForgotPasswordFormComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
    ],
  },
];
