import { Login, IRegister } from './../models/login';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CONFIG } from '../shared/config';

import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private _headers = new HttpHeaders().set('Content-Type', 'application/json');
  private _authUrl = CONFIG.baseUrls.auth; // 'http://localhost:34479/api/auth';

  constructor(private http: HttpClient) {
      this._headers.append('Content-Type', 'application/json');
  }

  login(login: Login): Observable<any> {
    return this.http.post(this._authUrl + '/authenticate', JSON.stringify(login), { headers: this._headers });
  }

  logout(): Observable<any> {
    return this.http.post(this._authUrl + '/logout', JSON.stringify(''));
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
    let _user: Login = new Login('', '', false);
    if (this.isUserAuthenticated()) {
      const _userData = JSON.parse(localStorage.getItem('user')!);
      _user = { userName: _userData.userName, password: '', rememberMe: _userData.rememberMe };
    }
    return _user;
  }

  register(register: IRegister): Observable<any> {
    return this.http.post(this._authUrl + '/register', JSON.stringify(register), { headers: this._headers });
  }

  // private handleError(error: Response) {
  //   console.log(error);
  //   return Observable.of(error.status);
  // }
}
