import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { ProductHomeComponent } from './product-home.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list.component';

export const ProductRoutes: Routes = [
    {
        path : 'products', component : ProductHomeComponent,
        children : [
            {
                path : '',
                component : ProductListComponent
            },
            {
                path : ':id',
                component : ProductComponent
            }
        ]
 }
];
