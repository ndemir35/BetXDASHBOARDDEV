import { Injectable } from '@angular/core';
import { Role } from '@betx/shared';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleContextService {
  detailRole$ = new BehaviorSubject<Role | undefined>(undefined);
  currentEditRole$ = new BehaviorSubject<Role | undefined>(undefined);
}
