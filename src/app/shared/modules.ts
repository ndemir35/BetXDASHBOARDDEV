import { CommonModule } from "@angular/common";
import { Provider } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ButtonModule, CardModule, FormModule, GridModule, LoadingButtonModule, SpinnerModule } from "@coreui/angular-pro";
import { TranslateModule } from "@ngx-translate/core";

export const SHARED_MODULES: Provider[] = [
    TranslateModule,
    CommonModule,
    GridModule,
    CardModule,
    ButtonModule,
    SpinnerModule
];

export const FORM_MODULES: Provider[] = [
    ReactiveFormsModule,
    FormModule,
    LoadingButtonModule
];