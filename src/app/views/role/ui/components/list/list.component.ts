import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BreadcrumbEntry, BreadcrumbService } from '@betx/core/data/services';
import { IconSubset } from '@betx/icons/icon-subset';
import { DateColumnComponent, Role, SHARED_MODULES } from '@betx/shared';
import { ActionMenuComponent } from '@betx/shared/components/action-menu/action-menu.component';
import { SpinnerService } from '@betx/shared/components/spinner';
import { PopupService } from '@betx/shared/data/services/popup.service';
import { RoleService } from '@betx/shared/data/services/role.service';
import { RoleContextService } from '@betx/views/role/data/role-context.service';
import {
  AlignDirective,
  CardModule,
  IColumn,
  ListGroupModule,
  ModalModule,
  PopoverModule,
  SharedModule,
  SmartTableModule,
  TableModule,
  TemplateIdDirective,
} from '@coreui/angular-pro';
import { TranslateService } from '@ngx-translate/core';
import { Subject, filter, of, switchMap, takeUntil, tap } from 'rxjs';

const COLUMN_HEADERS: ReadonlyMap<string, string> = new Map<string, string>([
  ['name', 'VIEW.ROLES.LIST.NAME'],
  ['expiresAt', 'VIEW.ROLES.LIST.EXPIRES_AT'],
]);

@Component({
  selector: 'betx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [
    SHARED_MODULES,
    TableModule,
    CardModule,
    PopoverModule,
    ListGroupModule,
    SmartTableModule,
    AlignDirective,
    TemplateIdDirective,
    SharedModule,
    ActionMenuComponent,
    RouterModule,
    DateColumnComponent,
    ModalModule,
  ],
})
export class ListComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();
  icons = IconSubset;
  isLoading = false;
  data: Role[] = [];
  columns: IColumn[] = [
    {
      key: 'name',
      label: this._translateService.instant('VIEW.ROLES.LIST.NAME'),
    },
    {
      key: 'expiresAt',
      label: this._translateService.instant('VIEW.ROLES.LIST.EXPIRES_AT'),
    },
    {
      key: 'show',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false,
    },
  ];

  constructor(
    private _roleService: RoleService,
    private _translateService: TranslateService,
    private _popupService: PopupService,
    private _spinnerService: SpinnerService,
    private _roleContextService: RoleContextService,
    private _router: Router,
    private _breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit() {
    this._breadcrumbService.setActive(BreadcrumbEntry.RoleList);

    this._translateService.onLangChange
      .pipe(takeUntil(this._destroy$))
      .subscribe((_) => {
        this.columns = [
          ...this.columns.map((column) => {
            if (COLUMN_HEADERS.has(column.key)) {
              column.label = this._translateService.instant(
                COLUMN_HEADERS.get(column.key)!
              );
            }
            return column;
          }),
        ];
      });

    this._getRoles().subscribe();
  }

  goToDetail(item: Role) {
    this._roleContextService.detailRole$.next(item);
    this._router.navigateByUrl('/role/detail/' + item.id);
  }

  private _getRoles() {
    this.isLoading = true;
    this.data = [];
    this._spinnerService.show();
    return this._roleService.listRoles().pipe(
      tap((response) => {
        if (response.isSuccessful) {
          this.data = response.data;
        }
        this.isLoading = false;
        this._spinnerService.hide();
      }),
      takeUntil(this._destroy$)
    );
  }

  private _showDeleteSuccessToast(name: string) {
    return this._popupService.toastSuccess('VIEW.ROLES.DELETE_SUCCESS', {
      roleName: name,
    });
  }

  private _showDeleteErrorToast(name: string, errorCode?: string) {}

  onDeleteRowClick(id: string, name: string) {
    this._popupService
      .confirmDanger('VIEW.ROLES.DELETE_WARNING', {
        roleName: name,
      })
      .pipe(
        filter((buttonRes) => buttonRes.success),
        switchMap(() => this._roleService.delete(id)),
        switchMap((resp) => {
          if (resp.isSuccessful) {
            this._showDeleteSuccessToast(name).subscribe();
            return this._getRoles();
          } else {
            this._popupService
              .toastErrorFromApi(resp.errorCode, undefined, { roleName: name })
              .subscribe();
            return of(undefined);
          }
        }),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  onEditRowClick(item: Role) {
    this._roleContextService.currentEditRole$.next(item);
    this._router.navigateByUrl('/role/edit');
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
