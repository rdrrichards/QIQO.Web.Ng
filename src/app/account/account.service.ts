import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONFIG } from '../shared/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IAccount } from '../models/account';
import { ExceptionService } from '../core/exception.service';

@Injectable()
export class AccountService {
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');
  private _accountsUrl = CONFIG.baseUrls.accounts; // 'http://localhost:34479/api/accounts';

  constructor(private httpClient: HttpClient,
    private exceptionService: ExceptionService) {
  }

  getAccounts(): Observable<IAccount[]> {
    // this._headers.append('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
    // this._headers.append('Access-Control-Allow-Origin', '*');
    // console.log(JSON.stringify(this._headers));
    return this.httpClient.get<IAccount[]>(this._accountsUrl)
      .map(response => <IAccount[]>response)
      // .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getAccount(id: number): Observable<IAccount> {
    return this.httpClient.get<IAccount>(this._accountsUrl + '/' + id)
      .map(response => <IAccount>response)
      // .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addAccount(account: IAccount): Observable<IAccount> {
    return this.httpClient.post(this._accountsUrl, JSON.stringify(account), { headers: this._headers })
      .map(response => response)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  updateAccount(account: IAccount): Observable<IAccount> {
    console.log(JSON.stringify(account));
    return this.httpClient.put(this._accountsUrl, JSON.stringify(account), { headers: this._headers })
      .map(response => response)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  deleteAccount(id: number): Observable<any> {
    return this.httpClient.delete(this._accountsUrl + '/' + id)
      .map(response => response, { headers: this._headers })
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this.exceptionService.catchBadResponse(error);
    console.log(error);
    return Observable.throw(error.status || 'Unknown error, likely an auth error');
  }
}
