import { Component } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';
import { MENU_ITEM_ROLE } from '@betx/views/menu/data/types';
import { INavData } from '@coreui/angular-pro';
import { TranslateService } from '@ngx-translate/core';
import { MenuBase } from '../menu-base';

@Component({
  selector: 'betx-operator-menu',
  templateUrl: './operator-menu.component.html',
  styleUrls: ['./operator-menu.component.css'],
  standalone: true,
  imports: [SHARED_MODULES],
})
export class OperatorMenuComponent extends MenuBase {
  override navItems: INavData[] = [MENU_ITEM_ROLE];

  constructor(_translateService: TranslateService) {
    super(_translateService);
  }
}
