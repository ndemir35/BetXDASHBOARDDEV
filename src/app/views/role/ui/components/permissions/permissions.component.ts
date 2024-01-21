import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';
import {
  ButtonModule,
  GridModule,
  SharedModule,
  SmartTableModule,
  TableModule,
  TemplateIdDirective,
} from '@coreui/angular-pro';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'betx-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css'],
  standalone: true,
  imports: [
    SHARED_MODULES,
    CommonModule,
    TableModule,
    SmartTableModule,
    SharedModule,
    TemplateIdDirective,
    GridModule,
    TranslateModule,
    ButtonModule,
  ],
})
export class PermissionsComponent implements OnInit {
  data: any[] = [
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

  constructor() {}

  ngOnInit() {
    this.data = [
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
    ];
  }
}
