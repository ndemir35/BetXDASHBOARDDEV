import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'betx-customer-menu',
  templateUrl: './customer-menu.component.html',
  styleUrls: ['./customer-menu.component.css'],
  standalone: true,
  imports: [SHARED_MODULES],
})
export class CustomerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
