import { Component, OnInit } from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'betx-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, PasswordChangeFormComponent],
})
export class PasswordChangeFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
