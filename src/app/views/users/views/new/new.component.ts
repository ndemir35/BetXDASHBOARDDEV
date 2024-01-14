import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'betx-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  standalone: true,
  imports: [
    SHARED_MODULES
  ]
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
