import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list.component';
import { AccountHomeComponent } from './account-home.component';
import { AccountOrdersComponent } from './account.orders.component';
import { AccountOrderComponent } from './account.order.component';

export const AccountRoutes: Routes = [
    {
        path : 'accounts', component : AccountHomeComponent,
        children : [
            {
                path : '',
                component : AccountListComponent
            },
            {
                path : ':id',
                component : AccountComponent
            },
            {
                path : ':id/orders',
                component : AccountOrdersComponent
            },
            {
                path : ':id/orders/:oid',
                component : AccountOrderComponent
            }
        ]
    }
]
