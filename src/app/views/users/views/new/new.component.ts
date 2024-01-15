import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FORM_MODULES, SHARED_MODULES } from '@betx/shared';
import { IdentityService } from '@betx/shared/data';
import { ToastModule } from '@coreui/angular-pro';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'betx-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, FORM_MODULES, ToastModule],
})
export class NewComponent implements OnInit {
  isLoading = false;
  showToast = false;
  toastMessage = '';
  toastTitle = 'Success';
  newUserForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  });

  constructor(private _identityService: IdentityService) {}

  ngOnInit() {}

  createNewUser() {
    if (!this.newUserForm.valid) {
      throw 'invalid';
    }

    const email = this.newUserForm.value.email;
    const password = this.newUserForm.value.password;
    const username = this.newUserForm.value.username;

    if (email && password && username) {
      this.isLoading = true;
      this.newUserForm.disable();

      this._identityService
        .register({
          email,
          username,
          password,
        })
        .pipe(
          finalize(() => {
            this.isLoading = false;
            this.newUserForm.enable();
          })
        )
        .subscribe((e) => {
          if (e.isSuccessful) {
          }
          this.toastMessage = e.isSuccessful
            ? 'Created user successfully'
            : 'Error creating user!';
          this.toastTitle = e.isSuccessful ? 'Success' : 'Error';
          this.showToast = true;
          this.newUserForm.reset();
          this.newUserForm.enable();
        });
    }
  }
}
