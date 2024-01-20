import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiService } from '@betx/core/data/services/base-api-service';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from '~/environments/environment';
import { ApiResponse, Role, RoleListResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends BaseApiService {
  constructor(_httpClient: HttpClient) {
    super(_httpClient);
  }

  listRoles(): Observable<ApiResponse<Role[]>> {
    return this.get<RoleListResponse[]>(
      `${environment.identityServiceUrl}/role/list`
    ).pipe(
      map((response) => ({
        ...response,
        data: response.data?.map(
          (d) =>
            (({
              id: d.roleId,
              name: d.roleName,
              expiresAt: d.expireDate,
            } as Role) ?? [])
        ),
      }))
    );
  }
}
