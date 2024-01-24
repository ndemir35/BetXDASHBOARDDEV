import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseIdentityService } from '@betx/core/data/services/base-identity-service';
import { Observable, map } from 'rxjs';
import {
  ApiResponse,
  Role,
  RoleDeleteModel,
  RoleListResponse,
  RoleNewModel,
  RoleUpdateModel,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class RoleService extends BaseIdentityService {
  constructor(_httpClient: HttpClient) {
    super(_httpClient);
  }

  /**
   * Returns a list of roles.
   * @returns {Observable<ApiResponse<Role[]>>} An observable that emits a response containing a list of roles.
   */
  listRoles(): Observable<ApiResponse<Role[]>> {
    return this.get<RoleListResponse[]>(`/role/list`).pipe(
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

  /**
   * Deletes a role by its ID.
   * @param {string} id - The ID of the role to be deleted.
   * @returns {Observable<any>} - An observable that emits when the role is successfully deleted.
   */
  delete(id: string): Observable<ApiResponse<any>> {
    return this.post<RoleDeleteModel, any>('/role/delete', {
      roleId: id,
    });
  }

  /**
   * Adds a new role to the system.
   *
   * @param {RoleNewModel} model - The details of the role to be added.
   * @returns {Observable<ApiResponse<any>>} An observable that emits a response indicating whether the role was added successfully.
   */
  add(model: RoleNewModel): Observable<ApiResponse<any>> {
    return this.post<RoleNewModel, any>('/role/add', model);
  }

  /**
   * Updates an existing role in the system.
   *
   * @param {RoleUpdateModel} model - The details of the role to be updated.
   * @returns {Observable<ApiResponse<any>>} An observable that emits a response indicating whether the role was updated successfully.
   */
  update(model: RoleUpdateModel): Observable<ApiResponse<any>> {
    return this.post<RoleUpdateModel, any>('/role/update', model);
  }
}
