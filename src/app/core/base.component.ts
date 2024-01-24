import { Directive, OnDestroy, OnInit } from '@angular/core';
import { ApiResponse } from '@betx/shared';
import { IColumn } from '@coreui/angular-pro';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject, takeUntil, tap } from 'rxjs';
import { BreadcrumbEntry, BreadcrumbService } from './data/services';

@Directive()
export abstract class BaseComponent implements OnDestroy, OnInit {
  protected _destroy$ = new Subject<void>();
  protected abstract _breadcrumbEntry: BreadcrumbEntry | undefined;

  constructor(protected _breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this._setBreadcrumbs();
  }

  private _setBreadcrumbs() {
    if (this._breadcrumbEntry) {
      this._breadcrumbService.setActive(this._breadcrumbEntry);
    }
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}

@Directive()
export abstract class BaseListComponent
  extends BaseComponent
  implements OnDestroy, OnInit
{
  public isLoading: boolean = false;
  public abstract columns: IColumn[];
  protected abstract columnHeaderLabelMap: ReadonlyMap<string, string>;

  constructor(
    protected _translateService: TranslateService,
    _breadcrumbService: BreadcrumbService
  ) {
    super(_breadcrumbService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this._listenLanguageChanges();
  }

  private _translateColumns() {
    const headerMap = this.columnHeaderLabelMap;
    this.columns.forEach((column) => {
      if (!headerMap.has(column.key)) {
        return;
      }
      column.label = this._translateService.instant(headerMap.get(column.key)!);
    });

    this.columns = [...this.columns];
  }

  private _listenLanguageChanges() {
    this._translateColumns();
    this._translateService.onLangChange
      .pipe(takeUntil(this._destroy$))
      .subscribe(this._translateColumns.bind(this));
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
@Directive()
export abstract class BaseGenericListComponent<T>
  extends BaseListComponent
  implements OnInit, OnDestroy
{
  public data: T[] = [];
  public override isLoading: boolean = false;

  constructor(
    _translateService: TranslateService,
    _breadcrumbService: BreadcrumbService
  ) {
    super(_translateService, _breadcrumbService);
  }

  abstract getData(): Observable<ApiResponse<T[]>> | undefined;

  abstract deleteRow(id: string): Observable<ApiResponse<any>>;

  onDataReceived(response: ApiResponse<T[]>) {
    this.data = response.data;
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.isLoading = true;

    this.getData()
      ?.pipe(
        tap(() => (this.isLoading = false)),
        takeUntil(this._destroy$)
      )
      .subscribe((res: ApiResponse<T[]>) => {
        this.onDataReceived(res);
      });
  }

  override ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
