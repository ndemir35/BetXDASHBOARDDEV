import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';
import { CardModule } from '@coreui/angular-pro';

@Component({
  selector: 'betx-auth-form-holder',
  templateUrl: './auth-form-holder.component.html',
  standalone: true,
  imports: [SHARED_MODULES, CardModule],
  styleUrls: ['./auth-form-holder.component.css'],
})
export class AuthFormHolderComponent implements OnInit {
  appLogo: string | undefined;

  constructor() {}

  ngOnInit() {
    this.appLogo = document.body.className.includes('dark-theme')
      ? 'assets/img/logo-reverse.png'
      : 'assets/img/logo.png';
  }
}
