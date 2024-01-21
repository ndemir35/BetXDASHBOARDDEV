import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreadcrumbEntry, BreadcrumbService } from '@betx/core/data/services';
import {
  FORM_MODULES,
  PopupService,
  RoleNewModel,
  RoleService,
  SHARED_MODULES,
} from '@betx/shared';
import { minDateValidator } from '@betx/shared/validators/min-date';
import { finalize, tap } from 'rxjs';

const NAME_MAX_LENGTH = 100;

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
  nameMaxLength = NAME_MAX_LENGTH;

  constructor(
    _formBuilder: FormBuilder,
    private _roleService: RoleService,
    private _popupService: PopupService,
    private _router: Router,
    private _breadcrumbService: BreadcrumbService
  ) {
    this.roleFormGroup = _formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(NAME_MAX_LENGTH),
        ],
      ],
      expiresAt: [null, [minDateValidator(new Date())]],
    });
  }

  ngOnInit() {
    this._breadcrumbService.setActive(BreadcrumbEntry.RoleNew);
  }

  private _getRequestModel() {
    return {
      roleName: this.roleFormGroup.get('name')?.value,
      expireDate: this.roleFormGroup.get('expiresAt')?.value,
    } as RoleNewModel;
  }

  onSubmit() {
    if (this.roleFormGroup.invalid) {
      return;
    }

    this.roleFormGroup.disable();

    this.isLoading = true;
    const model = this._getRequestModel();
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
