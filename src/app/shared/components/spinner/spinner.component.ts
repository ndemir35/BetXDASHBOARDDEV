import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './data';

@Component({
  selector: 'betx-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SpinnerComponent {
  showSpinner$ = this.spinnerService.loading$;

  constructor(private spinnerService: SpinnerService) {}
}
