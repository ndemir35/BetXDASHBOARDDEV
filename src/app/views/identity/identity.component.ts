import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css'],
  standalone: true,
  imports: [
    SHARED_MODULES,
    RouterModule
  ]
})
export class IdentityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
