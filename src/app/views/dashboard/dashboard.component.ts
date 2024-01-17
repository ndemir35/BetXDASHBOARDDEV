import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'betx-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrls: ['./dashboard.component.css'],
  imports: [SHARED_MODULES, RouterModule],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
