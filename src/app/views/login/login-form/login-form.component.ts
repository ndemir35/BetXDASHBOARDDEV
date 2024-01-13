import { ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { SHARED_MODULES } from "@betx/shared";
import { ButtonModule, FormModule, SpinnerModule } from "@coreui/angular-pro";
import { IconModule } from "@coreui/icons-angular";
import { LoginService } from '../login.service';
import { Subscription } from "rxjs";
import { Router, RouterModule } from "@angular/router";


@Component({
    selector: 'betx-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss'],
    standalone: true,
    imports: [
        FormModule,
        ButtonModule,
        SpinnerModule,
        IconModule,
        ReactiveFormsModule,
        RouterModule,
        SHARED_MODULES,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit, OnDestroy {
    private _subscriptions = new Subscription();
    isLoading = false;
    isLoginFailed = false;
    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });
    isSubmitted = false;

    constructor(
        private _formBuilder: FormBuilder,
        private _loginService: LoginService,
        private _router: Router
    ) { }

    getIsValidValueFor = (field: string) =>
        this.isSubmitted ? this.form.get(field)?.valid : null;

    ngOnInit(): void {
        this.form = this._formBuilder.group(
            {
                username: [
                    { value: '', disabled: false },
                    [
                        Validators.required,
                    ]
                ],
                password: [
                    { value: '', disabled: false },
                    [
                        Validators.required,
                    ]
                ]
            }
        );
    }

    login() {
        this.isSubmitted = true;

        if (!this.form.valid) {
            return;
        }

        this.isLoading = true;
        this._subscriptions.add(
            this._loginService.login().subscribe(loginResult => {
                if (loginResult) {
                    this._router.navigateByUrl('/dashboard')
                }
            })
        );
    }

    ngOnDestroy(): void {
        this._subscriptions.unsubscribe();
    }

}