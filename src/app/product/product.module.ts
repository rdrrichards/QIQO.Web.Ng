import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ ProductComponent ],
  declarations: [ ProductComponent ]
})
export class ProductModule { }
