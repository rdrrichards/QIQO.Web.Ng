import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Register } from '../models/login';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  public pageTitle = 'Register with The Cheesecake Fool';
  public account: Register = new Register('', '', '');
  public errMessage: string;

  constructor(private _authService: AuthService,
    private _router: Router) { }

  register() {
    this._authService.register(this.account)
      .subscribe(acct => {
        localStorage.setItem('user', JSON.stringify(this.register));
        this._router.navigate(['/']);
      });
  }

  cancel() {
    this._router.navigate(['/']);
  }
}
