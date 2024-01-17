import { CommonModule } from '@angular/common';
import { Provider } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  LoadingButtonModule,
  SpinnerModule,
} from '@coreui/angular-pro';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ApiMessagePipe, ValidationMessagePipe } from './pipes';

export const SHARED_MODULES: Provider[] = [
  TranslateModule,
  CommonModule,
  GridModule,
  CardModule,
  ButtonModule,
  SpinnerModule,
];

export const FORM_MODULES: Provider[] = [
  ReactiveFormsModule,
  FormModule,
  LoadingButtonModule,
];

export const SHARED_COMPONENTS: Provider[] = [ErrorMessageComponent];

export const SHARED_PIPES: Provider[] = [ApiMessagePipe, ValidationMessagePipe];

export const SHARED = [SHARED_MODULES, SHARED_COMPONENTS, SHARED_PIPES];
