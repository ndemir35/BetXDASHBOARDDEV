import { EventEmitter } from '@angular/core';

export interface IMenuAction {
  label: string;
  icon: string;
  handler?: EventEmitter<void>;
  onClick?: () => void;
}
