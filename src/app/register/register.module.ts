import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [ RegisterComponent ],
  declarations: [ RegisterComponent ]
})
export class RegisterModule { }
