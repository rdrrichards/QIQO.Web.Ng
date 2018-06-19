import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ WelcomeComponent ],
  declarations: [ WelcomeComponent ]
})
export class WelcomeModule { }
