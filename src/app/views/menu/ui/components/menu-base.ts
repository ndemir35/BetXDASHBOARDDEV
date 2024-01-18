import { Directive, OnDestroy, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';
import { INavData, SidebarModule } from '@coreui/angular-pro';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

export const MENU_IMPORTS = [SHARED_MODULES, SidebarModule];
export const MENU_TEMPLATE_URL = '../menu-base.html';

@Directive({})
export abstract class MenuBase implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  abstract navItems: INavData[];

  constructor(private _translateService: TranslateService) {}

  ngOnInit(): void {
    if (this.navItems.some((item) => !item.name?.length)) {
      throw 'Some menu definitions are missing';
    }

    this._translateService
      .get(this.navItems.map((x) => x.name!))
      .pipe(takeUntil(this._destroy$))
      .subscribe((translations) => {
        this.navItems = this.navItems.map((item) => ({
          ...item,
          name: translations[item.name!],
        }));
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
