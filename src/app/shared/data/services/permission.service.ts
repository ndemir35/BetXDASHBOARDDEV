import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseIdentityService } from '@betx/core/data/services/base-identity-service';
import { Observable, map } from 'rxjs';
import { environment } from '~/environments/environment';
import { ApiResponse, Permission } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PermissionService extends BaseIdentityService {
  override baseUrl: string = environment.identityServiceUrl;

  constructor(_http: HttpClient) {
    super(_http);
  }

  /**
   * Returns a list of permissions.
   * @returns {Observable<ApiResponse<Permission[]>>} An observable that emits a response containing a list of permissions.
   */
  list(roleId?: string | undefined): Observable<ApiResponse<Permission[]>> {
    const path = roleId?.length
      ? `/permission/list/${roleId}`
      : '/permission/list/';
    return this.get(path).pipe(
      map((response: ApiResponse<any>) => {
        response.data = response.data?.map((data: any) => {
          return {
            id: data['permissionId'],
            controller: data['controllerName'],
            serviceName: data['serviceName'],
            action: data['actionName'],
          } as Permission;
        });

        return response;
      })
    );
  }
}
