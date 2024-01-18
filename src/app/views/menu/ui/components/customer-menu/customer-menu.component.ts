import { Component } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';
import { INavData, SidebarModule } from '@coreui/angular-pro';
import { MENU_IMPORTS, MENU_TEMPLATE_URL, MenuBase } from '../menu-base';
import { MENU_ITEM_ROLE, MENU_ITEM_USER } from '@betx/views/menu/data/types';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'betx-customer-menu',
  templateUrl: MENU_TEMPLATE_URL,
  styleUrls: ['./customer-menu.component.css'],
  standalone: true,
  imports: [MENU_IMPORTS]
})
export class CustomerMenuComponent extends MenuBase {
  override navItems: INavData[] = [MENU_ITEM_USER];

  constructor(_translateService: TranslateService) {
    super(_translateService);
  }
}
