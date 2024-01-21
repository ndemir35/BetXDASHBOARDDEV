import { CommonModule } from '@angular/common';
import { Provider } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonModule,
  CardModule,
  DatePickerModule,
  FormModule,
  GridModule,
  LoadingButtonModule,
  SpinnerModule,
} from '@coreui/angular-pro';
import { TranslateModule } from '@ngx-translate/core';
import { ApiMessagePipe, ValidationMessagePipe } from './pipes';
import { IconModule } from '@coreui/icons-angular';
import {
  ErrorMessageComponent,
  RequiredLabelComponent,
  ValidationMessageComponent,
} from './components';

export const SHARED_MODULES: Provider[] = [
  TranslateModule,
  CommonModule,
  GridModule,
  CardModule,
  ButtonModule,
  SpinnerModule,
  IconModule,
];

export const FORM_MODULES: Provider[] = [
  ReactiveFormsModule,
  FormModule,
  LoadingButtonModule,
  DatePickerModule,
  RequiredLabelComponent,
  ValidationMessageComponent,
];

export const SHARED_COMPONENTS: Provider[] = [ErrorMessageComponent];

export const SHARED_PIPES: Provider[] = [ApiMessagePipe, ValidationMessagePipe];

export const SHARED = [SHARED_MODULES, SHARED_COMPONENTS, SHARED_PIPES];
