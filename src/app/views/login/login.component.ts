import { Component } from "@angular/core";
import { ButtonModule, CardModule } from "@coreui/angular-pro";
import { LoginFormComponent } from './login-form/login-form.component'
import { SHARED_MODULES } from "@betx/shared";
import { TranslateModule } from "@ngx-translate/core";

@Component({
    selector: 'betx-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [
        CardModule,
        LoginFormComponent,
        SHARED_MODULES,
        TranslateModule
    ]
})
export class LoginComponent {}