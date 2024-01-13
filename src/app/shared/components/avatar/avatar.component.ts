import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';
import { AuthenticationService } from '@betx/shared/services/authentication.service';
import {
  AvatarModule,
  DropdownModule,
  ListGroupModule,
  PopoverModule,
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'betx-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  imports: [
    SHARED_MODULES,
    AvatarModule,
    PopoverModule,
    ListGroupModule,
    IconModule,
    DropdownModule,
    RouterModule,
  ],
})
export class AvatarComponent {
  constructor(
    private _authService: AuthenticationService,
    private _router: Router
  ) {}

  logout() {
    this._authService.logout();
    this._router.navigateByUrl('auth/login');
  }
}
