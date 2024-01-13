import { Component } from '@angular/core';

import { navItems } from './_nav';
import { GridModule, SidebarModule } from '@coreui/angular-pro';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { SHARED_MODULES } from '@betx/shared';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RouterModule } from '@angular/router';
import { DefaultFooterComponent } from './default-footer/default-footer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  standalone: true,
  imports: [
    SHARED_MODULES,
    DefaultHeaderComponent,
    SidebarModule,
    NgScrollbarModule,
    RouterModule,
    DefaultFooterComponent
  ],
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent {
  public navItems = navItems;

  constructor() {}
}
