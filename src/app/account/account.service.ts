import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { CONFIG } from '../shared/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IAccount } from '../models/account';
import { ExceptionService } from '../core/exception.service';

@Injectable()
export class AccountService {
  private _headers = new Headers();
  private _accountsUrl = CONFIG.baseUrls.accounts; // 'http://localhost:34479/api/accounts';

  constructor(private http: Http,
    private exceptionService: ExceptionService) {
    this._headers.append('Content-Type', 'application/json');
    this._headers.append('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  getAccounts(): Observable<IAccount[]> {
    return this.http.get(this._accountsUrl)
      .map(response => <IAccount[]>response.json())
      // .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getAccount(id: number): Observable<IAccount> {
    return this.http.get(this._accountsUrl + '/' + id)
      .map(response => <IAccount>response.json())
      // .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  addAccount(account: IAccount): Observable<IAccount> {
    return this.http.post(this._accountsUrl, JSON.stringify(account), { headers: this._headers })
      .map(response => response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  updateAccount(account: IAccount): Observable<IAccount> {
    console.log(JSON.stringify(account));
    return this.http.put(this._accountsUrl, JSON.stringify(account), { headers: this._headers })
      .map(response => response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  deleteAccount(id: number): Observable<any> {
    return this.http.delete(this._accountsUrl + '/' + id)
      .map(response => response.json(), { headers: this._headers })
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    this.exceptionService.catchBadResponse(error);
    console.log(error);
    return Observable.throw(error.status || 'Unknown error, likely an auth error');
  }
}
