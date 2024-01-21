import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BreadcrumbEntry, BreadcrumbService } from '@betx/core/data/services';
import {
  FORM_MODULES,
  PopupService,
  RoleService,
  RoleUpdateModel,
  SHARED_MODULES,
} from '@betx/shared';
import { minDateValidator } from '@betx/shared/validators/min-date';
import { RoleContextService } from '@betx/views/role/data/role-context.service';
import { Subject, finalize, takeUntil, tap } from 'rxjs';

const NAME_MAX_LENGTH = 100;

@Component({
  selector: 'betx-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, FORM_MODULES],
})
export class EditComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  isLoading = false;
  roleFormGroup: FormGroup;
  nameMaxLength = NAME_MAX_LENGTH;

  constructor(
    _formBuilder: FormBuilder,
    private _roleService: RoleService,
    private _popupService: PopupService,
    private _router: Router,
    private _contextService: RoleContextService,
    private _breadcrumbService: BreadcrumbService
  ) {
    this.roleFormGroup = _formBuilder.group({
      id: ['', Validators.required],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(NAME_MAX_LENGTH),
        ],
      ],
      expiresAt: ['', minDateValidator(new Date())],
    });
  }

  ngOnInit() {
    this._breadcrumbService.setActive(BreadcrumbEntry.RoleEdit);
    this._contextService.currentEditRole$
      .pipe(takeUntil(this._destroy$))
      .subscribe((editRole) => {
        console.log(editRole);
        this.roleFormGroup.setValue({
          id: editRole?.id,
          name: editRole?.name,
          expiresAt: editRole?.expiresAt,
        });
      });
  }

  private _getRequestModel() {
    return {
      roleId: this.roleFormGroup.value.id,
      roleName: this.roleFormGroup.value.name,
      expireDate: this.roleFormGroup.value.expiresAt,
    } as RoleUpdateModel;
  }

  onSubmit() {
    if (this.roleFormGroup.invalid) {
      return;
    }

    this.roleFormGroup.disable();

    this.isLoading = true;
    const model = this._getRequestModel();
    this._roleService
      .update(model)
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

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
