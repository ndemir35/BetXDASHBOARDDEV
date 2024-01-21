import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BaseListComponent } from '@betx/core/base.component';
import { BreadcrumbEntry, BreadcrumbService } from '@betx/core/data/services';
import { SHARED_MODULES } from '@betx/shared';
import {
  ButtonModule,
  GridModule,
  IColumn,
  SharedModule,
  SmartTableModule,
  TableModule,
  TemplateIdDirective,
} from '@coreui/angular-pro';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

const COLUMN_HEADERS: ReadonlyMap<string, string> = new Map<string, string>([
  ['name', 'VIEW.ROLES.LIST.NAME'],
  ['expiresAt', 'VIEW.ROLES.LIST.EXPIRES_AT'],
]);

const MOCK_DATA = [
  {
    permission: 'create:invoice',
    description: 'Create invoice',
    api: 'Sales Module',
  },
  {
    permission: 'read:catalog-item',
    description: 'View catalog items',
    api: 'Gift Shop Module',
  },
  {
    permission: 'read:customer-profile',
    description: 'View customer profiles',
    api: 'Gift Shop Module',
  },
  {
    permission: 'update:user-profile',
    description: 'Update user proile',
    api: 'Identity Module',
  },
];

@Component({
  selector: 'betx-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css'],
  standalone: true,
  imports: [
    SHARED_MODULES,
    SmartTableModule,
    SharedModule,
    TemplateIdDirective,
    GridModule,
    TranslateModule,
  ],
})
export class PermissionsComponent
  extends BaseListComponent
  implements OnInit, OnDestroy
{
  protected override _breadcrumbEntry: BreadcrumbEntry | undefined;

  override columns: IColumn[] = [
    {
      key: 'permission',
    },
    {
      key: 'description',
    },
    {
      key: 'api',
    },
    {
      key: 'show',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false,
    },
  ];
  override columnHeaderLabelMap: ReadonlyMap<string, string> = new Map<
    string,
    string
  >([
    ['permission', 'COMMON.PERMISSION'],
    ['description', 'COMMON.DESCRIPTION'],
    ['api', 'COMMON.API'],
  ]);
  data: any[] = [
    ...MOCK_DATA,
    ...MOCK_DATA,
    ...MOCK_DATA,
    ...MOCK_DATA,
    ...MOCK_DATA,
    ...MOCK_DATA,
    ...MOCK_DATA,
    ...MOCK_DATA,
    ...MOCK_DATA,
    ...MOCK_DATA,
  ];

  constructor(
    _translateService: TranslateService,
    _breadcrumbsService: BreadcrumbService
  ) {
    super(_translateService, _breadcrumbsService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.data = [
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
    ];
  }
}
