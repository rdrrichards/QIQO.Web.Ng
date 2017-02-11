import { Routes, RouterModule } from '@angular/router';

import { WelcomeRoutes } from './home/welcome.routes';
import { ProductRoutes } from './product/product.routes';
import { AccountRoutes } from './account/account.routes';
// import { AccountOrdersRoutes } from '../accounts/account/account.orders.routes';

export const routes: Routes = [
     ...WelcomeRoutes,
     ...ProductRoutes,
     ...AccountRoutes,
    // ...AccountOrdersRoutes
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);