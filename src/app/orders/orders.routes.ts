import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { OrdersHomeComponent } from './orders-home.component';
import { OrderComponent } from './order.component';
import { OpenOrdersComponent } from './open-orders.component';

export const OrdersRoutes: Routes = [
    {
        path : 'orders', component : OrdersHomeComponent,
        children : [
            {
                path : '',
                component : OpenOrdersComponent
            },
            {
                path : ':id',
                component : OrderComponent
            }
        ]
 }
];
