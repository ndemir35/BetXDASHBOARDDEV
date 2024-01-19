import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { iconSubset } from '@betx/icons/icon-subset';
import { SHARED_MODULES } from '@betx/shared';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { DropdownModule, WidgetModule } from '@coreui/angular-pro';
import { cilArrowTop, cilOptions } from '@coreui/icons';

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
export class DashboardComponent implements OnInit {
  icons = { cilOptions, cilArrowTop };

  data: any = {};
  options: any = {};

  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
    'February',
    'March',
    'April',
  ];

  datasets = [
    {
      label: 'My First dataset',
      backgroundColor: 'transparent',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: 'var(--cui-primary)',
      pointHoverBorderColor: 'var(--cui-primary)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ];

  optionsDefault = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: true,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        min: 30,
        max: 89,
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 1,
        tension: 0.4,
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
  };

  ngOnInit(): void {
    this.data = {
      labels: this.labels.slice(0, 7),
      datasets: this.datasets,
    };
    this.options = this.optionsDefault;
  }
}
