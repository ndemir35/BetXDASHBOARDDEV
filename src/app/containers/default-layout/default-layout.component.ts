import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';
import { MenuComponent } from '@betx/views/menu';
import { AlertModule, BadgeModule, SidebarModule } from '@coreui/angular-pro';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DefaultHeaderComponent } from './default-header/default-header.component';

@Component({
  selector: 'betx-default-layout',
  templateUrl: './default-layout.component.html',
  standalone: true,
  imports: [
    SHARED_MODULES,
    DefaultHeaderComponent,
    SidebarModule,
    NgScrollbarModule,
    RouterModule,
    MenuComponent,
    SidebarModule,
    BadgeModule,
  ],
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  constructor() {}
}
