import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ AccountComponent ],
  declarations: [ AccountComponent ]
})
export class AccountModule { }
