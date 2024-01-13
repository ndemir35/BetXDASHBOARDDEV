import { Component } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';
import { AvatarModule } from '@coreui/angular-pro';

@Component({
  selector: 'betx-avatar',
  standalone: true,
  templateUrl: './avatar.component.html',
  imports: [SHARED_MODULES, AvatarModule],
})
export class AvatarComponent {}
