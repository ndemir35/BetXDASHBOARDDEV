import {
  AfterContentInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbEntry, BreadcrumbService } from '@betx/core/data/services';
import { SHARED_MODULES } from '@betx/shared';
import { ChartjsModule } from '@coreui/angular-chartjs';
import {
  DropdownModule,
  WidgetModule
} from '@coreui/angular-pro';
import { cibFacebook, cibLinkedin, cibTwitter } from '@coreui/icons';
import { Subject } from 'rxjs';

@Component({
  selector: 'betx-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrls: ['./dashboard.component.css'],
  imports: [
    SHARED_MODULES,
    RouterModule,
    WidgetModule,
    ChartjsModule,
    DropdownModule,
  ],
})
export class DashboardComponent implements AfterContentInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private breadcrumbsService: BreadcrumbService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  icons = { cibFacebook, cibLinkedin, cibTwitter };

  @Input() withCharts?: boolean = true;

  // @ts-ignore
  chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  datasets = {
    borderWidth: 2,
    fill: true,
  };
  colors = {
    backgroundColor: 'rgba(255,255,255,.1)',
    borderColor: 'rgba(255,255,255,.55)',
    pointHoverBackgroundColor: '#fff',
  };
  brandData = [
    {
      icon: this.icons.cibFacebook,
      values: [
        { title: 'friends', value: '89K' },
        { title: 'feeds', value: '459' },
      ],
      capBg: { '--cui-card-cap-bg': '#3b5998' },
      labels: [...this.labels],
      data: {
        labels: [...this.labels],
        datasets: [
          {
            ...this.datasets,
            data: [65, 59, 84, 84, 51, 55, 40],
            label: 'Facebook',
            ...this.colors,
          },
        ],
      },
    },
    {
      icon: this.icons.cibTwitter,
      values: [
        { title: 'followers', value: '973k' },
        { title: 'tweets', value: '1.792' },
      ],
      capBg: { '--cui-card-cap-bg': '#00aced' },
      data: {
        labels: [...this.labels],
        datasets: [
          {
            ...this.datasets,
            data: [1, 13, 9, 17, 34, 41, 38],
            label: 'Twitter',
            ...this.colors,
          },
        ],
      },
    },
    {
      icon: this.icons.cibLinkedin,
      values: [
        { title: 'contacts', value: '500' },
        { title: 'feeds', value: '1.292' },
      ],
      capBg: { '--cui-card-cap-bg': '#4875b4' },
      data: {
        labels: [...this.labels],
        datasets: [
          {
            ...this.datasets,
            data: [78, 81, 80, 45, 34, 12, 40],
            label: 'LinkedIn',
            ...this.colors,
          },
        ],
      },
    },
  ];

  capStyle(value: string) {
    return !!value ? { '--cui-card-cap-bg': value } : {};
  }

  ngAfterContentInit(): void {
    this.breadcrumbsService.setActive(BreadcrumbEntry.Dashboard);
    this.changeDetectorRef.detectChanges();
  }
}
