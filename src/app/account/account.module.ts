import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ AccountComponent ],
  declarations: [ AccountComponent ]
})
export class AccountModule { }
