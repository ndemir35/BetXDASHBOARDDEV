import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonModule, ToastModule } from '@coreui/angular-pro';
import { Subscription } from 'rxjs';
import { ToastMessage } from './data';
import { ToastService } from './toast.service';

@Component({
  selector: 'betx-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  standalone: true,
  imports: [ToastModule, ButtonModule],
})
export class ToastComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  visible = false;
  toastMessage?: ToastMessage;
  timeoutHandle?: any;

  constructor(private _toastService: ToastService) {}

  ngOnInit() {
    this._subscription.add(
      this._toastService.toastStream$.subscribe((message) => {
        this.visible = true;
        this.toastMessage = message;
        this._createAutoHideHandler();
      })
    );
  }

  private _createAutoHideHandler() {
    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = setTimeout(() => {
      this.visible = false;
    }, 3000);
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }
}
