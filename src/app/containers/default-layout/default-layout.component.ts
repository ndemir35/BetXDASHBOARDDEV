import { Component, OnDestroy, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';
import { INavData, SidebarModule } from '@coreui/angular-pro';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { Subscription, first } from 'rxjs';

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
    DefaultFooterComponent,
  ],
  // providers: [TranslatePipe, TranslateService],
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  private _subscription = new Subscription();
  navItems: INavData[] = [];

  constructor(private _translateService: TranslateService) {
    // this.navItems = [
    //   {
    //     name: this._translateService.instant('LOGIN.LOGIN_FORM.TITLE'),
    //     url: '/dashboard',
    //     iconComponent: { name: 'cil-speedometer' },
    //   },
    //   {
    //     name: 'LOGIN.LOGIN_FORM.TITLE',
    //     url: '/identity',
    //     iconComponent: { name: 'cil-speedometer' },
    //   },
    // ];
  }
  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ngOnInit(): void {
    this._subscription.add(
      this._translateService.onLangChange.pipe(first()).subscribe((event) => {
        this.navItems = [
          {
            name: 'DASHBOARD.MENU.DASHBOARD',
            url: '/dashboard',
            iconComponent: { name: 'cil-speedometer' },
          },
          {
            name: 'DASHBOARD.MENU.USERS',
            url: '/user',
            iconComponent: { name: 'cil-user' },
          },
        ].map((item) => ({
          ...item,
          name: this._translateService.instant(item.name),
        }));
      })
    );
  }
}
