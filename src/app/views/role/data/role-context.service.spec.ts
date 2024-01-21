/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoleContextService } from './role-context.service';

describe('Service: RoleContext', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleContextService]
    });
  });

  it('should ...', inject([RoleContextService], (service: RoleContextService) => {
    expect(service).toBeTruthy();
  }));
});
