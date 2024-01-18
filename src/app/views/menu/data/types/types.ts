import { IconSubset } from '@betx/icons/icon-subset';
import { INavData } from '@coreui/angular-pro';

export const MENU_ITEM_USER: INavData = {
  name: 'DASHBOARD.MENU.USERS',
  url: '/user',
  iconComponent: { name: IconSubset.cilUser },
};

export const MENU_ITEM_ROLE: INavData = {
  name: 'DASHBOARD.MENU.ROLE',
  url: '/role',
  iconComponent: { name: IconSubset.cilApplicationsSettings },
};
