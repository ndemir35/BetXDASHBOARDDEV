import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'betx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  standalone: true,
  imports: [SHARED_MODULES],
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
