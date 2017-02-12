import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import { IAccount } from '../models/account';

@Component({
  selector: 'app-account',
  template: '<router-outlet></router-outlet>'
})
export class AccountHomeComponent{}
