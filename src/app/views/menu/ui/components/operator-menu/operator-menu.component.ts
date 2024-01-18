import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'betx-operator-menu',
  templateUrl: './operator-menu.component.html',
  styleUrls: ['./operator-menu.component.css'],
  standalone: true,
  imports: [SHARED_MODULES],
})
export class OperatorMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
