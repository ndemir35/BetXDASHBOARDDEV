import { Component } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';
import { INavData } from '@coreui/angular-pro';
import { MenuBase } from '../menu-base';
import { MENU_ITEM_ROLE, MENU_ITEM_USER } from '@betx/views/menu/data/types';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'betx-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css'],
  standalone: true,
  imports: [SHARED_MODULES],
})
export class CustomerMenuComponent extends MenuBase {
  override navItems: INavData[] = [MENU_ITEM_USER];

  constructor(_translateService: TranslateService) {
    super(_translateService);
  }
}
