import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list.component';
import { AccountHomeComponent } from './account-home.component';
import { AccountOrdersComponent } from './account.orders.component';
import { AccountOrderComponent } from './account.order.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [ AccountComponent, AccountHomeComponent, AccountListComponent, 
    AccountOrdersComponent, AccountOrderComponent ],
  declarations: [ AccountComponent, AccountHomeComponent, AccountListComponent, 
    AccountOrdersComponent, AccountOrderComponent ]
})
export class AccountModule { }
