import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { AccountComponent } from './account.component';
// import { AccountListComponent } from './account-list/account-list.component';
// import { AccountComponent } from './account/account.component';
// import { AccountOrdersComponent } from './account/account-orders-list/account.orders.component';
// import { AccountOrderDetailComponent } from './account/account-order/account.order.detail.component';

export const AccountRoutes: Routes = [
    {
        path : 'accounts', component : AccountComponent,
        // children : [
        //     {
        //         path : '',
        //         component : AccountListComponent
        //     },
        //     {
        //         path : ':id',
        //         component : AccountComponent
        //     }
        // ]
    }
]
