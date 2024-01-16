import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '@betx/shared/data/interfaces/response';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class BaseApiService {
  constructor(private _http: HttpClient) {}

  private _handleError(
    errorResponse: HttpErrorResponse
  ): Observable<ApiResponse> {
    return of(<ApiResponse>{
      status: errorResponse?.status,
      message: errorResponse?.message,
      isSuccessful: false,
      errorCode: errorResponse.error?.errors?.[0]?.code?.toUpperCase(),
    });
  }

  private _mapResponse(response: any): ApiResponse {
    return {
      status: response.status,
      message: response.statusText,
      isSuccessful: response.status === 200,
      errorCode: response['errors']?.[0]?.['code']?.toUpperCase(),
    };
  }

  post<T>(url: string, body: T): Observable<ApiResponse> {
    return this._http
      .post(url, body)
      .pipe(map(this._mapResponse), catchError(this._handleError));
  }

  get<T>(url: string): Observable<ApiResponse> {
    return this._http
      .get(url)
      .pipe(map(this._mapResponse), catchError(this._handleError));
  }
}
