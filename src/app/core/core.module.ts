
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { EntityService } from './entity.service';

@NgModule({
  imports: [
    CommonModule, // we use ngFor
    RouterModule, // because we use <router-outlet> and routerLink
  ],
  exports: [],
  declarations: [],
  providers: [ EntityService ]
})

export class CoreModule { }