import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [SHARED_MODULES],
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
