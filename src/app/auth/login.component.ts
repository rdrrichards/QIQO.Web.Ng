import { Component, OnInit, Input } from '@angular/core';
import { Login } from '../models/login';
import { AccountService } from './account.service';
import { Router } from '@angular/router';
import { EntityService, ToastService } from '../shared/shared';

@Component({
    templateUrl: 'app/accounts/login.component.html'
})
export class LoginComponent {
    public pageTitle: string = 'Login';
    public login : Login; // 
    
    constructor(private _accountService : AccountService,
                private _router: Router,
                private _toastService: ToastService) {
        this.login = new Login('', '', false);
    }
    
    logMeIn(){
        //console.log(this.login);
        this._accountService.login(this.login)
            .subscribe(login => {
                //this._setEditAccount(acct);
                this._toastService.activate(`Successfully logged in ${this.login.userName}`);
                this._router.navigate(['/']);
                localStorage.setItem('user', JSON.stringify(this.login));
        });
    }
    
    cancel() {
        this._router.navigate(['/']);
    }
}