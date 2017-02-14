import { Component, OnInit, Input  } from '@angular/core';
import { AccountService } from './account.service';
import { Register } from '../models/login';
import { Router } from '@angular/router';
import { EntityService, ToastService } from '../shared/shared';

@Component({
    templateUrl: 'app/accounts/register.component.html'
})
export class RegisterComponent {
    public pageTitle: string = 'Register with The Cheesecake Fool';
    public account : Register = new Register('', '', '');
    public errMessage: string;
    
    constructor(private _accountService : AccountService,
                private _router: Router,
                private _toastService: ToastService) {
        
    }
    
    register(register: Register){
        this._accountService.register(this.account)
            .subscribe(acct => {
                this._toastService.activate(`Successfully registered ${register.userName}`);
                localStorage.setItem('user', JSON.stringify(this.register));
                this._router.navigate(['/']);
        });
    }
    
    cancel() {
        this._router.navigate(['/']);
    }
}