import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseGenericListComponent } from '@betx/core/base.component';
import { BreadcrumbEntry, BreadcrumbService } from '@betx/core/data/services';
import {
  ApiResponse,
  Permission,
  SHARED_LIST_PAGE_MODULES,
  SHARED_MODULES,
} from '@betx/shared';
import { PermissionService } from '@betx/shared/data/services/permission.service';
import { IColumn } from '@coreui/angular-pro';
import { TranslateService } from '@ngx-translate/core';
import { Observable, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'betx-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, SHARED_LIST_PAGE_MODULES],
})
export class PermissionsComponent
  extends BaseGenericListComponent<Permission>
  implements OnInit, OnDestroy
{
  protected override _breadcrumbEntry: BreadcrumbEntry | undefined;

  override columns: IColumn[] = [
    {
      key: 'action',
    },
    {
      key: 'controller',
    },
    {
      key: 'serviceName',
    },
    {
      key: 'show',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false,
    },
  ];
  override columnHeaderLabelMap: ReadonlyMap<string, string> = new Map<
    string,
    string
  >([
    ['action', 'VIEW.ROLES.DETAIL.PERMISSION.ACTION'],
    ['controller', 'VIEW.ROLES.DETAIL.PERMISSION.CONTROLLER'],
    ['serviceName', 'VIEW.ROLES.DETAIL.PERMISSION.SERVICE'],
  ]);
  override data: Permission[] = [];

  constructor(
    _translateService: TranslateService,
    _breadcrumbsService: BreadcrumbService,
    private _permissionService: PermissionService,
    private _route: ActivatedRoute
  ) {
    super(_translateService, _breadcrumbsService);
  }

  override getData(): Observable<ApiResponse<Permission[]>> | undefined {
    return this._route.parent?.params.pipe(
      takeUntil(this._destroy$),
      switchMap((params: any) => {
        return this._permissionService.list(params.id);
      })
    );
  }

  override deleteRow(id: string): Observable<ApiResponse<any>> {
    throw 'not implemented';
  }

  override ngOnInit() {
    super.ngOnInit();
  }
}
