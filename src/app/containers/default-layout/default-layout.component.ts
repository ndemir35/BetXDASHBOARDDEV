import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';
import { INavData, SidebarModule } from '@coreui/angular-pro';
import { TranslateService } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { Subscription, first } from 'rxjs';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { IconSubset } from '@betx/icons/icon-subset';
import { MenuComponent } from '@betx/views/menu';

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
    MenuComponent
  ],
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  private _subscription = new Subscription();
  navItems: INavData[] = [];

  constructor(private _translateService: TranslateService) {}
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ngOnInit(): void {
    this._initMenuItems();
  }

  private _initMenuItems() {
    this._subscription.add(
      this._translateService
        .get(['DASHBOARD.MENU.DASHBOARD', 'DASHBOARD.MENU.USERS'])
        .pipe(first())
        .subscribe((translations) => {
          this.navItems = [
            {
              name: translations['DASHBOARD.MENU.DASHBOARD'],
              url: '/dashboard',
              iconComponent: { name: IconSubset.cilSpeedometer },
            },
            {
              name: translations['DASHBOARD.MENU.USERS'],
              url: '/user',
              iconComponent: { name: IconSubset.cilUser },
            },
          ].map((item) => ({
            ...item,
            name: this._translateService.instant(item.name),
          }));
        })
    );
  }
}
