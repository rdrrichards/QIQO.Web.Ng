import { Routes, RouterModule } from '@angular/router';

import { WelcomeRoutes } from './home/welcome.routes';
import { ProductRoutes } from './product/product.routes';
import { AccountRoutes } from './account/account.routes';
import { OrdersRoutes } from './orders/orders.routes';
import { CartRoutes } from './cart/cart.routes';
import { AuthRoutes } from './auth/auth.routes';
import { RegisterRoutes } from './register/register.routes';
import { CanDeactivateGuard } from './core/can-deactivate-guard.service';

export const routes: Routes = [
     ...WelcomeRoutes,
     ...ProductRoutes,
     ...AccountRoutes,
     ...OrdersRoutes,
     ...CartRoutes,
     ...AuthRoutes,
     ...RegisterRoutes
];

export const appRoutingProviders: any[] = [ CanDeactivateGuard ];

export const routing = RouterModule.forRoot(routes, {});
