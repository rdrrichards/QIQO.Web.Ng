
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntityService } from './entity.service';
import { ExceptionService } from './exception.service';
import { ToastModule } from './toast/toast.module';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    RouterModule, // because we use <router-outlet> and routerLink
    ToastModule
  ],
  exports: [ ToastModule ],
  declarations: [],
  providers: [ EntityService, ExceptionService ]
})

export class CoreModule { }