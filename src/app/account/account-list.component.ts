import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import { IAccount } from '../models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account-List.component.html'
})
export class AccountListComponent implements OnInit {
  public pageTitle = 'Accounts';
  public accounts: IAccount[];
  public errMessage: string;

  constructor(private _accountService: AccountService,
    private _router: Router) {
  }

  ngOnInit() {
    // componentHandler.upgradeDom();
    console.log('Calling getAccounts');
    this._accountService.getAccounts()
      .subscribe(
      accounts => this.accounts = accounts,
      error => {
        console.log('Error getAccounts');
        this.errMessage = <any>error;
        if (this.errMessage) {
          this._router.navigate(['../login']);
        }
      }
      );
  }
}
