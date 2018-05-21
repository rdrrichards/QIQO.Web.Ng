import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list.component';
import { ProductHomeComponent } from './product-home.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [ ProductHomeComponent, ProductListComponent, ProductComponent ],
  declarations: [ ProductHomeComponent, ProductListComponent, ProductComponent ],
  providers: [ProductService]
})
export class ProductModule { }
