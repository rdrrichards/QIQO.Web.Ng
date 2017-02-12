import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';
import { OpenOrdersComponent } from './open-orders.component';
import { OrdersHomeComponent } from './orders-home.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [ OrdersHomeComponent, OpenOrdersComponent, OrderComponent ],
  declarations: [ OrdersHomeComponent, OpenOrdersComponent, OrderComponent ]
})
export class OrdersModule { }
