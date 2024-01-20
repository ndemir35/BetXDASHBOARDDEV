import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  FORM_MODULES,
  PopupService,
  RoleNewModel,
  RoleService,
  SHARED_MODULES,
} from '@betx/shared';
import { finalize, tap } from 'rxjs';

@Component({
  selector: 'betx-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, FORM_MODULES],
})
export class NewComponent implements OnInit {
  isLoading = false;
  roleFormGroup: FormGroup;

  constructor(
    _formBuilder: FormBuilder,
    private _roleService: RoleService,
    private _popupService: PopupService,
    private _router: Router
  ) {
    this.roleFormGroup = _formBuilder.group({
      name: ['', Validators.required],
      expiresAt: [''],
    });
  }

  ngOnInit() {}

  private _getRequestModel() {
    return {
      roleName: this.roleFormGroup.get('name')?.value,
      expireDate: this.roleFormGroup.get('expiresAt')?.value,
    } as RoleNewModel;
  }

  onSubmit() {
    this.roleFormGroup.disable();

    if (this.roleFormGroup.invalid) {
      return;
    }

    this.isLoading = true;
    const model = this._getRequestModel();
    console.log(model.expireDate)
    this._roleService
      .add(model)
      .pipe(
        tap((resp) => {
          if (resp.isSuccessful) {
            this._popupService.toastSuccess().pipe().subscribe();
            this._router.navigateByUrl('/role/list');
          } else {
            this._popupService.toastErrorFromApi(resp.errorCode, undefined, {
              roleName: model.roleName,
            });
          }
        }),
        finalize(() => {
          this.roleFormGroup.enable();
          this.isLoading = false;
        })
      )
      .subscribe();
  }
}
