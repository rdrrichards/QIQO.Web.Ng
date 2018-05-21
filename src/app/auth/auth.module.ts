import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [ LoginComponent ],
  declarations: [ LoginComponent ],
  providers: [AuthService]
})
export class AuthModule { }
