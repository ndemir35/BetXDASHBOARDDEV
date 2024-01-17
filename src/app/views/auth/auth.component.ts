import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';
import { AuthFormHolderComponent } from '@betx/views/auth/ui/auth-form-holder/auth-form-holder.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, AuthFormHolderComponent, RouterModule],
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
