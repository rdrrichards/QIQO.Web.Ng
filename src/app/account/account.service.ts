import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../shared/config';

import { Observable } from 'rxjs';

import { IAccount } from '../models/account';

@Injectable()
export class AccountService {
  private _accountsUrl = CONFIG.baseUrls.accounts;

  constructor(private httpClient: HttpClient) {
  }

  getAccounts(): Observable<IAccount[]> {
    return this.httpClient.get<IAccount[]>(this._accountsUrl);
  }

  getAccount(id: number): Observable<IAccount> {
    return this.httpClient.get<IAccount>(this._accountsUrl + '/' + id);
  }

  addAccount(account: IAccount): Observable<any> {
    return this.httpClient.post(this._accountsUrl, account);
  }

  updateAccount(account: IAccount): Observable<any> {
    console.log(JSON.stringify(account));
    return this.httpClient.put(this._accountsUrl, account);
  }

  deleteAccount(id: number): Observable<any> {
    return this.httpClient.delete(this._accountsUrl + '/' + id);
  }
}
