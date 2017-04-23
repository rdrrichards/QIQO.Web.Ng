import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { CONFIG } from '../shared/config';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Login, IRegister } from '../models/login';
import { ExceptionService } from '../core/exception.service';

@Injectable()
export class AuthService {
  private _headers = new Headers();
  private _authUrl = CONFIG.baseUrls.auth; // 'http://localhost:34479/api/auth';

  constructor(private http: Http,
    private exceptionService: ExceptionService) {
    this._headers.append('Content-Type', 'application/json');
    this._headers.append('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
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
      _user = { userName: _userData.userName, password: '', rememberMe: _userData.rememberMe };
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
    this.exceptionService.catchBadResponse(error);
    console.log(error);
    return Observable.throw(error.status || 'Unknown error, likely an auth error');
  }
}
