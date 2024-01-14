import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';
import { IdentityService } from '@betx/views/auth/data/identity.service';
import { ButtonModule, FormModule, SpinnerModule } from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';

@Component({
  selector: 'betx-password-change-form',
  templateUrl: './password-change-form.component.html',
  styleUrls: ['./password-change-form.component.css'],
  standalone: true,
  imports: [
    SHARED_MODULES,
    PasswordChangeFormComponent,
    FormModule,
    ReactiveFormsModule,
    IconModule,
    SpinnerModule,
    ButtonModule,
  ],
})
export class PasswordChangeFormComponent implements OnInit {
  isLoading = false;
  isSubmitted = false;

  form = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: IdentityService,
    private _router: Router
  ) {}

  getIsValidValueFor(arg0: string): boolean | undefined {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.form = this._formBuilder.group({
      newPassword: [{ value: '', disabled: false }, [Validators.required]],
      confirmPassword: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  changePassword() {}
}
