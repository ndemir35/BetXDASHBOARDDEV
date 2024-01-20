import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_MODULES } from '@betx/shared/modules';
import { DropdownModule } from '@coreui/angular-pro';
import { IMenuAction } from './data/types';

@Component({
  selector: 'betx-action-menu',
  templateUrl: './action-menu.component.html',
  styleUrls: ['./action-menu.component.css'],
  standalone: true,
  imports: [SHARED_MODULES, DropdownModule, RouterModule],
})
export class ActionMenuComponent implements OnInit {
  @Output() onEditClick = new EventEmitter();
  @Output() onDeleteClick = new EventEmitter();
  @Input() actions: IMenuAction[] = [
    {
      label: 'COMMON.EDIT',
      icon: 'cil-pencil',
      handler: this.onEditClick,
    },
    {
      label: 'COMMON.DELETE',
      icon: 'cil-x',
      handler: this.onDeleteClick,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
