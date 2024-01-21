import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseListComponent } from '@betx/core/base.component';
import { BreadcrumbEntry, BreadcrumbService } from '@betx/core/data/services';
import { SHARED_MODULES } from '@betx/shared';
import { IColumn, SmartTableComponent } from '@coreui/angular-pro';
import { TranslateService } from '@ngx-translate/core';

const MOCK_DATA = [
  {
    fullName: 'Berk Öztürk',
    userType: 'SuperUser',
  },
  {
    fullName: 'Ruth L. Spruell',
    userType: 'Manager',
  },
  {
    fullName: 'Paul J. Rickard',
    userType: 'SystemUser',
  },
  {
    fullName: 'Kyle B. Chambers',
    userType: 'Customer',
  },
];

const LOT_OF_MOCK_DATA = [
  ...MOCK_DATA,
  ...MOCK_DATA,
  ...MOCK_DATA,
  ...MOCK_DATA,
  ...MOCK_DATA,
  ...MOCK_DATA,
  ...MOCK_DATA,
];

@Component({
  selector: 'betx-users-in-role',
  templateUrl: './users-in-role.component.html',
  styleUrls: ['./users-in-role.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, SmartTableComponent],
})
export class UsersInRoleComponent
  extends BaseListComponent
  implements OnInit, OnDestroy
{
  override columnHeaderLabelMap: ReadonlyMap<string, string> = new Map<
    string,
    string
  >([
    ['fullName', 'COMMON.FULL_NAME'],
    ['userType', 'COMMON.USER_TYPE'],
  ]);
  override columns: IColumn[] = [
    {
      key: 'fullName',
    },
    {
      key: 'userType',
    },
  ];

  data: any[] = LOT_OF_MOCK_DATA;

  constructor(
    _translateService: TranslateService,
    _breadcrumbService: BreadcrumbService
  ) {
    super(_translateService, _breadcrumbService);
  }

  override ngOnInit() {
    super.ngOnInit();
  }


  protected override getBreadcrumbEntry(): BreadcrumbEntry {
    throw new Error('Method not implemented.');
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
