import { Component, Input, OnInit } from '@angular/core';
import { SHARED_MODULES, StorageService, UserType } from '@betx/shared';
import { AvatarComponent } from '@betx/shared/components/avatar/avatar.component';

import {
  BadgeModule,
  BreadcrumbModule,
  HeaderComponent,
  HeaderModule,
  NavModule,
  SidebarModule,
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'betx-header',
  templateUrl: './default-header.component.html',
  standalone: true,
  imports: [
    AvatarComponent,
    SHARED_MODULES,
    BreadcrumbModule,
    SidebarModule,
    HeaderModule,
    NavModule,
    IconModule,
    BadgeModule,
  ],
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {
  userType: UserType = UserType.NotDefined;
  
  constructor(private _storageService: StorageService) {
    super();
  }

  ngOnInit(): void {
    this.userType = this._storageService.userType.value;
  }

  @Input() sidebarId: string = 'sidebar1';
}
