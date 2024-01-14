import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'betx-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  standalone: true,
  imports: [
    SHARED_MODULES,
    RouterModule
  ]
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
