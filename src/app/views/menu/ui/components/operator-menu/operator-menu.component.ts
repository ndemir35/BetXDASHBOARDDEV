import { Component } from '@angular/core';
import { MENU_ITEM_ROLE } from '@betx/views/menu/data/types';
import { INavData } from '@coreui/angular-pro';
import { TranslateService } from '@ngx-translate/core';
import { MENU_IMPORTS, MENU_TEMPLATE_URL, MenuBase } from '../menu-base';

@Component({
  selector: 'betx-operator-menu',
  templateUrl: MENU_TEMPLATE_URL,
  styleUrls: ['./operator-menu.component.css'],
  standalone: true,
  imports: [MENU_IMPORTS]
})
export class OperatorMenuComponent extends MenuBase {
  override navItems: INavData[] = [MENU_ITEM_ROLE];

  constructor(_translateService: TranslateService) {
    super(_translateService);
  }
}
