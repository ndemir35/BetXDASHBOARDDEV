import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'betx-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css'],
  standalone: true,
  imports: [SHARED_MODULES],
})
export class AdminMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
