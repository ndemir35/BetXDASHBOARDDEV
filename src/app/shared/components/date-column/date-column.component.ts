import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'betx-date-column',
  templateUrl: './date-column.component.html',
  styleUrls: ['./date-column.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class DateColumnComponent {
  date = input<Date | undefined>();
}
