import { Directive, OnDestroy, OnInit } from '@angular/core';
import { IColumn } from '@coreui/angular-pro';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { BreadcrumbEntry, BreadcrumbService } from './data/services';

@Directive()
export abstract class BaseComponent implements OnDestroy, OnInit {
  protected _destroy$ = new Subject<void>();

  constructor(protected _breadcrumbService: BreadcrumbService) {}

  protected abstract getBreadcrumbEntry(): BreadcrumbEntry;

  ngOnInit(): void {
    this._setBreadcrumbs();
  }

  private _setBreadcrumbs() {
    try {
      this._breadcrumbService.setActive(this.getBreadcrumbEntry());
    } catch {}
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
  public abstract columns: IColumn[];
  public abstract columnHeaderLabelMap: ReadonlyMap<string, string>;

  constructor(
    protected _translateService: TranslateService,
    _breadcrumbService: BreadcrumbService
  ) {
    super(_breadcrumbService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    console.log(this.columnHeaderLabelMap, this.columns);
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
