
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntityService } from './entity.service';
import { ExceptionService } from './exception.service';
import { ToastModule } from './toast/toast.module';
import { ModalModule } from './modal/modal.module';

import { CanActivateGuard } from './can-activate-guard.service';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    RouterModule, // because we use <router-outlet> and routerLink
    ToastModule,
    ModalModule
  ],
  exports: [ ToastModule, ModalModule ],
  declarations: [],
  providers: [ EntityService, ExceptionService, CanActivateGuard ]
})

export class CoreModule { }
