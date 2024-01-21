import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbEntry, BreadcrumbService } from '@betx/core/data/services';
import { SHARED_MODULES } from '@betx/shared';
import {
  SmartTableModule
} from '@coreui/angular-pro';

@Component({
  selector: 'betx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, SmartTableModule, RouterModule],
})
export class ListComponent implements OnInit {
  data: any[] = [
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
  constructor(private _breadcrumbService: BreadcrumbService) {
    this._breadcrumbService.setActive(BreadcrumbEntry.UserList);
  }

  ngOnInit() {
    this.data = [
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
    ];
  }
}
