import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SHARED_MODULES, StorageService } from '@betx/shared';
import { IdentityService } from '@betx/shared/data/services/identity.service';
import {
  AvatarModule,
  BadgeModule,
  DropdownModule,
  NavModule,
  PopoverModule
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { TranslateService } from '@ngx-translate/core';
import { SpinnerService } from '../spinner';

@Component({
  selector: 'betx-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  imports: [
    SHARED_MODULES,
    AvatarModule,
    PopoverModule,
    IconModule,
    DropdownModule,
    RouterModule,
    BadgeModule,
    NavModule
  ],
})
export class AvatarComponent {
  constructor(
    private _authService: IdentityService,
    private _storageService: StorageService,
    private _router: Router,
    private _spinnerService: SpinnerService,
    private _translateService: TranslateService
  ) {
  }

  logout() {
    this._spinnerService.show();
    this._authService.logout().subscribe(() => {
      this._storageService.authToken.remove();
      this._spinnerService.hide();
      this._router.navigateByUrl('auth/login');
    });
  }

  setLang(lang: string) {
    this._translateService.use(lang);
  }
}
