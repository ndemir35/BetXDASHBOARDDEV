import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES, StorageService, UserType } from '@betx/shared';
import { AdminMenuComponent, CustomerMenuComponent } from './ui';
import { OperatorMenuComponent } from './ui/components/operator-menu/operator-menu.component';

@Component({
  selector: 'betx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [
    SHARED_MODULES,
    RouterModule,
    AdminMenuComponent,
    OperatorMenuComponent,
    CustomerMenuComponent,
  ],
})
export class MenuComponent implements OnInit {
  userType?: UserType;
  UserType = UserType;

  constructor(private _storageService: StorageService) {}

  ngOnInit() {
    this.userType = this._storageService.userType.value;
  }
}
