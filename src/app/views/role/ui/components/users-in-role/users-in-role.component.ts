import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';
import { SmartTableComponent } from '@coreui/angular-pro';

@Component({
  selector: 'betx-users-in-role',
  templateUrl: './users-in-role.component.html',
  styleUrls: ['./users-in-role.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, SmartTableComponent],
})
export class UsersInRoleComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {
    this.data = [
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data,
      ...this.data
    ]
  }
}
