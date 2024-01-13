import { CommonModule } from "@angular/common";
import { Provider } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

export const SHARED_MODULES: Provider[] = [
    TranslateModule,
    CommonModule
];