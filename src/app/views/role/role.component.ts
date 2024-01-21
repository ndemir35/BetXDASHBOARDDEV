import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'betx-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, RouterModule],
})
export class RoleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
