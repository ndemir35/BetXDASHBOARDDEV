import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'betxValidationMessage',
  standalone: true
})
export class ValidationMessagePipe implements PipeTransform {
  constructor(private _translateService: TranslateService) {}

  transform(value?: string, args?: any): any {
    if (!value?.length) {
      return '';
    }

    return this._translateService.instant(
      `VALIDATION.${value.toUpperCase()}`
    );
  }
}
