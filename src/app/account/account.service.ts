import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { CONFIG } from '../shared/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IAccount } from '../models/account';
import { Login, IRegister } from '../models/login';

@Injectable()
export class AccountService {
  private _headers = new Headers();
  private _accountsUrl = CONFIG.baseUrls.accounts; // 'http://localhost:34479/api/accounts';
  private _authUrl = CONFIG.baseUrls.auth; // 'http://localhost:34479/api/auth';

  constructor(private http: Http) {
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

  login(login: Login): Observable<any> {
    return this.http.post(this._authUrl + '/authenticate', JSON.stringify(login), { headers: this._headers })
      .map(response => response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  logout(): Observable<any> {
    return this.http.post(this._authUrl + '/logout', '', { headers: this._headers })
      // .map(response => response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  isUserAuthenticated(): boolean {
    const _user: any = localStorage.getItem('user');
    if (_user != null) {
      return true;
    } else {
      return false;
    }
  }

  getLoggedInUser(): Login {
    let _user: Login;
    if (this.isUserAuthenticated()) {
      const _userData = JSON.parse(localStorage.getItem('user'));
      _user = { userName: _userData.userName, password: _userData.password, rememberMe: _userData.rememberMe };
    }
    return _user;
  }

  register(register: IRegister): Observable<any> {
    return this.http.post(this._authUrl + '/register', JSON.stringify(register), { headers: this._headers })
      .map(response => response.json().data)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    // console.log('WTF');
    console.log(error);
    return Observable.throw(error.status || 'Unknown error, likely an auth error');
  }
}
