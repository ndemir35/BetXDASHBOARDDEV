import { Component, OnDestroy, OnInit } from '@angular/core';
import { IconSubset } from '@betx/icons/icon-subset';
import { Role, SHARED_MODULES } from '@betx/shared';
import { RoleService } from '@betx/shared/data/services/role.service';
import {
  CardModule,
  IColumn,
  ListGroupModule,
  PopoverModule,
  SmartTableModule,
  TableModule,
} from '@coreui/angular-pro';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

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
  ];

  constructor(
    private _roleService: RoleService,
    private _translateService: TranslateService
  ) {}
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  ngOnInit() {
    this.isLoading = true;

    this._roleService
      .listRoles()
      .pipe(takeUntil(this._destroy$))
      .subscribe((response) => {
        if (response.isSuccessful) {
          this.data = response.data;
          console.log(this.data);
        }
        this.isLoading = false;
        console.log(response);
      });
  }
}
