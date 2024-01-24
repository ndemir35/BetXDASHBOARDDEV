import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseIdentityService } from '@betx/core/data/services/base-identity-service';
import { environment } from '~/environments/environment';

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
  list(roleId: string | undefined): Observable<Permission[]> {
    return this.get<void, Permission>(`/permission/list`);
  }
}
