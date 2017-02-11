import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { ProductComponent } from './product.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { ProductComponent } from './product/product.component';

export const ProductRoutes: Routes = [
    {
        path : 'products', component : ProductComponent,
        // children : [
        //     {
        //         path : '',
        //         component : ProductListComponent
        //     },
        //     {
        //         path : ':id',
        //         component : ProductComponent
        //     }
        // ]
 }
]
