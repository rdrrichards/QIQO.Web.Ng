import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONFIG } from '../shared/config';

import { Observable } from 'rxjs';

import { IAccount } from '../models/account';

@Injectable()
export class AccountService {
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');
  private _accountsUrl = CONFIG.baseUrls.accounts; // 'http://localhost:34479/api/accounts';

  constructor(private httpClient: HttpClient) {
  }

  getAccounts(): Observable<IAccount[]> {
    // this._headers.append('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    // this._headers.append('Access-Control-Allow-Origin', '*');
    // console.log(JSON.stringify(this._headers));
    return this.httpClient.get<IAccount[]>(this._accountsUrl);
  }

  getAccount(id: number): Observable<IAccount> {
    return this.httpClient.get<IAccount>(this._accountsUrl + '/' + id);
  }

  addAccount(account: IAccount): Observable<any> {
    return this.httpClient.post(this._accountsUrl, account, { headers: this._headers });
  }

  updateAccount(account: IAccount): Observable<any> {
    console.log(JSON.stringify(account));
    return this.httpClient.put(this._accountsUrl, account, { headers: this._headers });
  }

  deleteAccount(id: number): Observable<any> {
    return this.httpClient.delete(this._accountsUrl + '/' + id);
  }

  // private handleError(error: Response) {
  //   this.exceptionService.catchBadResponse(error);
  //   console.log(error);
  //   return Observable.throw(error.status || 'Unknown error, likely an auth error');
  // }
}
