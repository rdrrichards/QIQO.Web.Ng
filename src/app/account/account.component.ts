import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from './account.service';
import { IAccount } from '../models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public pageTitle = 'Account Detail';
  @Input() public account: IAccount;
  public editAccount: IAccount = <IAccount>{};
  public errMessage: string;
  private _id: number;
  private sub: any;

  constructor(private _accountService: AccountService,
    private route: ActivatedRoute,
    private _router: Router) {
  }

  cancel(showToast = true) {
    // this.editAccount = this._entityService.clone(this.account);
    if (showToast) {
      // this._toastService.activate(`Cancelled changes to ${this.account.accountName}`);
    }
    this._gotoAccounts();
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = 2; // +params['id']; // (+) converts string 'id' to a number
      this._id = id;
      this.pageTitle += `: ${id}`;
      console.log('Trying to get param and call getAccount');
      console.log('Account id from the params: ' + id);
      this._accountService.getAccount(id)
        .subscribe(
        account => this._setEditAccount(account),
        error => this.errMessage = <any>error
        );
    });
  }

  addAccount() {
    console.log('addAccount in the account.component');
    console.log(this.account);
    this._accountService.addAccount(this.account)
      .subscribe(
      account => this.account = account,
      error => this.errMessage = <any>error
      );
  }

  updateAccount() {
    const account = this.account; // = this._entityService.merge(this.account, this.editAccount);
    console.log('updateAccount in the account.component');
    console.log(account);
    this._accountService.updateAccount(account)
      .subscribe(acct => {
        this._setEditAccount(acct);
        this._gotoAccounts();
      });
  }

  deleteAccount() {
    this._accountService.deleteAccount(this.account.accountKey)
      .subscribe(
      acct => this.onBack(),
      error => alert('Error deleting account ' + this.account.accountName)
      );
  }

  isAddMode() {
    return isNaN(this._id);
  }

  onBack(): void {
    this._router.navigate(['/accounts']);
  }

  getAccountOpenOrders(): void {
    console.log('Account id from the params: ' + this._id);
    console.log('Attempting to route to account orders...');
    const link = ['/accounts', this._id, 'orders'];
    this._router.navigate(link);
  }

  private _isDirty() {
    return false; // this._entityService.propertiesDiffer(this.account, this.editAccount);
  }

  private _setEditAccount(account: IAccount) {
    if (account) {
      this.account = account;
        this.editAccount = account; // this._entityService.clone(this.account);
    } else {
      this._gotoAccounts();
    }
  }

  private _gotoAccounts() {
    const id = this.account ? this.account.accountKey : null;
    const route = ['/accounts'];
    this._router.navigate(route);
  }

}
