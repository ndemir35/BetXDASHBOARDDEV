import { Injectable } from '@angular/core';
import {
  ConfirmBoxEvokeService,
  IConfirmBoxPublicResponse,
  IToastNotificationResponse,
  ToastEvokeService,
} from '@costlydeveloper/ngx-awesome-popup';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor(
    private _translateService: TranslateService,
    private _confirmBoxEvokeService: ConfirmBoxEvokeService,
    private _toastEvokeService: ToastEvokeService
  ) {}

  private _translate(key: string, interpolateParams?: Object) {
    return this._translateService.instant(key, interpolateParams);
  }

  private get _areYouSureText() {
    return this._translate('POPUP.ARE_YOU_SURE');
  }

  private get _confirmText() {
    return this._translate('POPUP.CONFIRM');
  }

  private get _cancelText() {
    return this._translate('POPUP.CANCEL');
  }

  private get _successText() {
    return this._translate('POPUP.SUCCESS');
  }

  private get _errorText() {
    return this._translate('POPUP.ERROR');
  }

  confirmDanger(
    message: string,
    interpolateParams?: Object
  ): Observable<IConfirmBoxPublicResponse> {
    return this._confirmBoxEvokeService.danger(
      this._areYouSureText,
      this._translate(message, interpolateParams),
      this._confirmText,
      this._cancelText
    );
  }

  toastSuccess(
    message?: string,
    interpolateParams?: Object
  ): Observable<IToastNotificationResponse>  {
    message = message ?? 'POPUP.SUCCESS_MESSAGE';

    return this._toastEvokeService.success(
      this._successText,
      this._translate(message, interpolateParams)
    );
  }

  toastError(message: string, interpolateParams?: Object): Observable<IToastNotificationResponse>  {
    return this._toastEvokeService.danger(
      this._errorText,
      this._translate(message, interpolateParams)
    );
  }

  toastErrorFromApi(
    errorCode?: string,
    fallback?: string,
    interpolateParams?: Object
  ): Observable<IToastNotificationResponse> {
    let message = errorCode ? `API_RESPONSE.${errorCode}` : fallback;
    message = message ?? 'POPUP.ERROR_MESSAGE';

    return this._toastEvokeService.danger(
      this._errorText,
      this._translate(message, interpolateParams)
    );
  }

  toastSuccessFromApi(
    successMessage?: string,
    fallback?: string,
    interpolateParams?: Object
  ): any {
    let message = successMessage ? successMessage : fallback;
    message = message ?? 'POPUP.SUCCESS_MESSAGE';

    return this._toastEvokeService.success(
      this._errorText,
      this._translate(message, interpolateParams)
    );
  }
}
