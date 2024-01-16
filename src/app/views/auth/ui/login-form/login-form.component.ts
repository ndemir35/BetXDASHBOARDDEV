import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {
  FORM_MODULES,
  SHARED_COMPONENTS,
  SHARED_MODULES,
  ValidationMessagePipe,
} from '@betx/shared';
import { UserLoginModel } from '@betx/shared/data';
import { ApiResponse } from '@betx/shared/data/interfaces/response';
import { ApiMessagePipe } from '@betx/shared/pipes/api-message.pipe';
import { AlertModule, ButtonModule, SpinnerModule } from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { IdentityService } from '../../../../shared/data/services/identity.service';
import { isEmail } from '../../utils/is-email';

@Component({
  selector: 'betx-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: true,
  imports: [
    ButtonModule,
    SpinnerModule,
    IconModule,
    RouterModule,
    AlertModule,
    SHARED_MODULES,
    FORM_MODULES,
    SHARED_COMPONENTS,
    ApiMessagePipe,
    ValidationMessagePipe,
  ],
  providers: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  isLoading = false;
  isUsernameValid?: boolean;
  isPasswordValid?: boolean;

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  errorCode = '';

  constructor(
    private _cdr: ChangeDetectorRef,
    private _authService: IdentityService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  private _getUserLoginModel(): UserLoginModel {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;

    const userLoginModel = {
      password: password,
    } as UserLoginModel;

    if (isEmail(username)) {
      userLoginModel.email = username;
    } else {
      userLoginModel.username = username;
    }

    return userLoginModel;
  }

  isFieldValid(inputName: string) {
    const input = this.form.get(inputName);
    return input?.dirty ? input.valid : undefined;
  }

  shouldShowValidationError(inputName: string, errorName: string) {
    const input = this.form.get(inputName);
    const error = input?.errors?.[errorName];
    return input?.dirty && error;
  }

  getErrorMessage(inputName: string) {
    return this.form.get(inputName)?.errors?.['required']?.length;
  }

  login() {
    if (!this.form.valid) {
      return;
    }

    this.errorCode = '';
    this.isLoading = true;
    this.form.disable();
    this._cdr.markForCheck();

    this._authService
      .login(this._getUserLoginModel())
      .subscribe((apiResponse: ApiResponse) => {
        if (apiResponse.errorCode?.length) {
          this.errorCode = apiResponse.errorCode;
        }

        this.isLoading = false;
        this.form.enable();
        this._cdr.markForCheck();
      });
  }

  goToForgotMyPassword() {
    this._authService.forgotPasswordUsername = this.form.get('username')?.value;
    this._router.navigateByUrl('auth/forgot-password');
  }
}
