import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared';
import { ButtonModule, FormModule, GridModule, SpinnerModule } from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { Subscription } from 'rxjs';
import { IdentityService } from '../../../../shared/data/services/identity.service';

const MIN_CHARS_TO_ENABLE_LOGIN_BTN = 3;

@Component({
  selector: 'betx-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  standalone: true,
  imports: [
    FormModule,
    ButtonModule,
    SpinnerModule,
    IconModule,
    ReactiveFormsModule,
    RouterModule,
    SHARED_MODULES,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit, OnDestroy {
  private _subscriptions = new Subscription();
  isLoading = false;
  isLoginFailed = false;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  isSubmitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: IdentityService,
    private _router: Router
  ) {}

  getIsValidValueFor = (field: string) =>
    this.isSubmitted ? this.form.get(field)?.valid : undefined;

  isLoginButtonDisabled = () =>
    this.form.get('username')?.value.length < MIN_CHARS_TO_ENABLE_LOGIN_BTN ||
    this.form.get('password')?.value.length < MIN_CHARS_TO_ENABLE_LOGIN_BTN;

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: [{ value: '', disabled: false }, [Validators.required]],
      password: [{ value: '', disabled: false }, [Validators.required]],
    });
  }

  login() {
    this.isSubmitted = true;

    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;
    this._subscriptions.add(
      this._authService.login().subscribe((loginResult) => {
        if (loginResult) {
          this._router.navigateByUrl('/dashboard');
        }
      })
    );
  }

  goToForgotMyPassword() {
    this._authService.forgotPasswordUsername = this.form.get('username')?.value;
    this._router.navigateByUrl('auth/forgot-password');
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }
}
