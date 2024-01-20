import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormControl,
  UntypedFormGroup,
} from '@angular/forms';
import { BreadcrumbService } from '@betx/core/data/services';
import { SHARED_MODULES, StorageService, UserType } from '@betx/shared';
import { AvatarComponent } from '@betx/shared/components/avatar/avatar.component';

import {
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ClassToggleService,
  FormModule,
  HeaderComponent,
  HeaderModule,
  IBreadcrumbItem,
  NavModule,
  SidebarModule,
} from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'betx-header',
  templateUrl: './default-header.component.html',
  standalone: true,
  imports: [
    AvatarComponent,
    SHARED_MODULES,
    BreadcrumbModule,
    SidebarModule,
    HeaderModule,
    NavModule,
    IconModule,
    BadgeModule,
    ButtonGroupModule,
    FormModule,
    ReactiveFormsModule,
  ],
})
export class DefaultHeaderComponent
  extends HeaderComponent
  implements OnInit, OnDestroy
{
  @Input() sidebarId: string = 'sidebar1';
  public themeSwitch = new UntypedFormGroup({
    themeSwitchRadio: new UntypedFormControl('light'),
  });
  private _destroy$ = new Subject<void>();
  userType: UserType = UserType.NotDefined;
  breadcrumbs: IBreadcrumbItem[] = [];

  constructor(
    private _storageService: StorageService,
    private _breadcrumbService: BreadcrumbService,
    private _classToggler: ClassToggleService
  ) {
    super();
  }

  ngOnInit(): void {
    this.userType = this._storageService.userType.value;
    this._breadcrumbService
      .getBreadcrumbItems()
      .pipe(takeUntil(this._destroy$))
      .subscribe((breadcrumbs) => {
        this.breadcrumbs = breadcrumbs;
      });
  }

  setTheme(value: string): void {
    this.themeSwitch.setValue({ themeSwitchRadio: value });
    this._classToggler.toggle('body', 'dark-theme');
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
