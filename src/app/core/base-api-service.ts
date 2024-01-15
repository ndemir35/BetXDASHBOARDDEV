import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '@betx/shared/data/models/response';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export class BaseApiService {
  constructor(private _http: HttpClient) {}

  private _handleError(error: any): Observable<ApiResponse> {
    return of(<ApiResponse>{
      status: error?.status,
      message: error?.message,
      isSuccessful: false,
    });
  }

  private _mapResponse(response: any): ApiResponse {
    return {
      status: response.status,
      message: response.statusText,
      isSuccessful: response.status === 200,
    };
  }

  post<T>(url: string, body: T): Observable<ApiResponse> {
    return this._http
      .post(url, body)
      .pipe(catchError(this._handleError), map(this._mapResponse));
  }

  get<T>(url: string): Observable<ApiResponse> {
    return this._http
      .get(url)
      .pipe(catchError(this._handleError), map(this._mapResponse));
  }
}
