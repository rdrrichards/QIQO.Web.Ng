import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { AccountComponent } from './account.component';
import { AccountListComponent } from './account-list.component';
import { AccountHomeComponent } from './account-home.component';
import { AccountOrdersComponent } from './account.orders.component';
import { AccountOrderComponent } from './account.order.component';
import { CanDeactivateGuard } from '../core/can-deactivate-guard.service';
import { CanActivateGuard } from '../core/can-activate-guard.service';

export const AccountRoutes: Routes = [
    {
        path : 'accounts', component : AccountHomeComponent,
        children : [
            {
                path : '',
                component : AccountListComponent, canActivate: [CanActivateGuard]
            },
            {
                path : ':id',
                component : AccountComponent, canDeactivate: [CanDeactivateGuard]
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
];
