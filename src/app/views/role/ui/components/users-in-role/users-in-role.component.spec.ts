/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsersInRoleComponent } from './users-in-role.component';

describe('UsersInRoleComponent', () => {
  let component: UsersInRoleComponent;
  let fixture: ComponentFixture<UsersInRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersInRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersInRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
