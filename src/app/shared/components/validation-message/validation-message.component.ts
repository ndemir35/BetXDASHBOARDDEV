import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { SHARED_MODULES } from '@betx/shared';

@Component({
  selector: 'betx-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css'],
  standalone: true,
  imports: [SHARED_MODULES],
})
export class ValidationMessageComponent {
  @Input() control: AbstractControl<any, any> | undefined | null;
}
