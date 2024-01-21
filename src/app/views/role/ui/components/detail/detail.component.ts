import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Role } from '@betx/shared';
import { RoleContextService } from '@betx/views/role/data/role-context.service';
import { NavModule, TabsModule } from '@coreui/angular-pro';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { UsersInRoleComponent } from '../users-in-role/users-in-role.component';
import { PermissionsComponent } from '../permissions/permissions.component';
import { BreadcrumbEntry, BreadcrumbService } from '@betx/core/data/services';

@Component({
  selector: 'betx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    TabsModule,
    RouterModule,
    NavModule,
    TranslateModule,
    PermissionsComponent,
    UsersInRoleComponent,
  ],
})
export class DetailComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  role$: Observable<Role | undefined> = this._roleContextService.detailRole$;

  tabs = [
    {
      label: 'VIEW.ROLES.DETAIL.PERMISSION.TITLE',
      link: 'permissions',
    },
    {
      label: 'VIEW.ROLES.DETAIL.USER.TITLE',
      link: 'users',
    },
  ];
  activeTabIndex = 0;

  constructor(
    private _roleContextService: RoleContextService,
    private _router: Router,
    private _breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    this._breadcrumbService.setActive(BreadcrumbEntry.RoleDetail);
    this.role$ = this._roleContextService.detailRole$;

    this.role$.pipe(takeUntil(this._destroy$)).subscribe((role) => {
      if (!role) {
        this._router.navigate(['/role/list']);
      }
    });
  }

  identifyTabs(item: any) {
    return item.label;
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
