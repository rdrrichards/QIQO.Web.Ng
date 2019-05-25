import { Login, IRegister, ILogin } from './../models/login';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../shared/config';

import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private _authUrl = CONFIG.baseUrls.auth;

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<ILogin> {
    return this.http.post<ILogin>(`${this._authUrl}/authenticate`, login);
  }

  logout(): Observable<any> {
    return this.http.post(`${this._authUrl}/logout`, JSON.stringify(''));
  }

  isUserAuthenticated(): boolean {
    const _user: any = localStorage.getItem('user');
    return _user != null ? true : false;
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
    return this.http.post(`${this._authUrl}/register`, register);
  }
}
