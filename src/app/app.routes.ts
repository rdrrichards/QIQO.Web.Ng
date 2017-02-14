import { Routes, RouterModule } from '@angular/router';

import { WelcomeRoutes } from './home/welcome.routes';
import { ProductRoutes } from './product/product.routes';
import { AccountRoutes } from './account/account.routes';
import { OrdersRoutes } from './orders/orders.routes';
import { CartRoutes } from './cart/cart.routes';

export const routes: Routes = [
     ...WelcomeRoutes,
     ...ProductRoutes,
     ...AccountRoutes,
     ...OrdersRoutes,
     ...CartRoutes
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(routes);