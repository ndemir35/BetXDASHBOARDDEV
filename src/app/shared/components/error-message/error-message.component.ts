import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SHARED_MODULES } from '@betx/shared';

const messagePrefix = 'API_RESPONSE.';

@Component({
  selector: 'betx-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
  standalone: true,
  imports: [SHARED_MODULES],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMessageComponent implements OnChanges {
  @Input() message: string = '';

  displayedMessage: string = '';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const messageChange = changes['message']?.currentValue;
    if (messageChange?.length) {
      this.displayedMessage = `${messagePrefix}${messageChange}`;
    } else {
      this.displayedMessage = '';
    }
  }
}
