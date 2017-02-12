import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list.component';
import { AccountHomeComponent } from './account-home.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [ AccountComponent, AccountHomeComponent, AccountListComponent ],
  declarations: [ AccountComponent, AccountHomeComponent, AccountListComponent ]
})
export class AccountModule { }
