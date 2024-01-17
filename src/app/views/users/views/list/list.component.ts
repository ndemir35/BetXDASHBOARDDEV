import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';
import { CardModule, NavModule, TableModule } from '@coreui/angular-pro';

@Component({
  selector: 'betx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, NavModule, RouterModule, CardModule, TableModule],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
