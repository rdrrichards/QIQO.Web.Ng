import { Component, OnInit, Input } from '@angular/core';
import { Login } from '../models/login';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    public pageTitle = 'Login';
    public login: Login;

    constructor(private _authService: AuthService,
                private _router: Router) {
        this.login = new Login('', '', false);
    }

    logMeIn(){
        this._authService.login(this.login)
            .subscribe(login => {
                this._router.navigate(['/']);
                localStorage.setItem('user', JSON.stringify(this.login));
        });
    }

    cancel() {
        this._router.navigate(['/']);
    }
}
