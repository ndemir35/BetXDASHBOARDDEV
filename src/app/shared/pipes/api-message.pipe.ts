import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'betxApiMessage',
  standalone: true,
})
export class ApiMessagePipe implements PipeTransform {
  constructor(private _translateService: TranslateService) {}

  transform(value?: string, args?: any): any {
    if (!value?.length) {
      return '';
    }

    return this._translateService.instant(
      `API_RESPONSE.${value.toUpperCase()}`
    );
  }
}
