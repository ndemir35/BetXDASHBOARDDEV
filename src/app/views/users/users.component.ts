import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';
import { CardModule, NavModule } from '@coreui/angular-pro';

@Component({
  selector: 'betx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: true,
  imports: [
    SHARED_MODULES,
    RouterModule,
    NavModule,
    CardModule
  ]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
