import { Component, Input } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';
import { AvatarComponent } from '@betx/shared/components/avatar/avatar.component';

import {
  BreadcrumbModule,
  GridModule,
  HeaderComponent,
  HeaderModule,
  NavModule,
  SidebarModule,
} from '@coreui/angular-pro';
import { IconModule, IconSetModule } from '@coreui/icons-angular';

@Component({
  selector: 'betx-header',
  templateUrl: './default-header.component.html',
  standalone: true,
  imports: [
    AvatarComponent,
    SHARED_MODULES,
    BreadcrumbModule,
    GridModule,
    SidebarModule,
    HeaderModule,
    NavModule,
    IconModule
  ],
})
export class DefaultHeaderComponent extends HeaderComponent {
  constructor() {
    super();
  }

  @Input() sidebarId: string = 'sidebar1';
}
