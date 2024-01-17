import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '@betx/shared/data/interfaces/response';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class BaseApiService {
  constructor(private _http: HttpClient) {}

  private _handleError<T>(
    errorResponse: HttpErrorResponse
  ): Observable<ApiResponse<T>> {
    return of(<ApiResponse<T>>{
      status: errorResponse?.status,
      message: errorResponse?.message,
      isSuccessful: false,
      errorCode: errorResponse.error?.errors?.[0]?.code?.toUpperCase(),
    });
  }

  private _mapResponse<T>(response: any): ApiResponse<T> {
    return {
      status: response.status,
      message: response.statusText,
      isSuccessful: response.isSuccess,
      errorCode: response['errors']?.[0]?.['code']?.toUpperCase(),
      data: response.data,
    };
  }

  post<T, K>(url: string, body: T): Observable<ApiResponse<K>> {
    return this._http
      .post(url, body)
      .pipe(map(this._mapResponse<K>), catchError(this._handleError<K>));
  }

  get<T, K>(url: string): Observable<ApiResponse<K>> {
    return this._http
      .get(url)
      .pipe(map(this._mapResponse<K>), catchError(this._handleError<K>));
  }
}
