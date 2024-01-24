import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '@betx/shared/data/interfaces/response';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export abstract class BaseApiService {
  abstract baseUrl: string;

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

  post<TRequest, TResponse>(path: string, body: TRequest): Observable<ApiResponse<TResponse>> {
    return this._http
      .post(`${this.baseUrl}${path}`, body)
      .pipe(map(this._mapResponse<TResponse>), catchError(this._handleError<TResponse>));
  }

  get<T>(path: string): Observable<ApiResponse<T>> {
    return this._http
      .get(`${this.baseUrl}${path}`)
      .pipe(map(this._mapResponse<T>), catchError(this._handleError<T>));
  }
}
