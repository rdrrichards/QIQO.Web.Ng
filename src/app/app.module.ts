import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { AccountModule } from './account/account.module';
import { WelcomeModule } from './home/welcome.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { RegisterModule } from './register/register.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routes';
import { HttpInterceptor } from './shared/interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AccountModule,
    ProductModule,
    WelcomeModule,
    OrdersModule,
    CartModule,
    AuthModule,
    RegisterModule,
    CoreModule,
    routing
  ],
  providers: [ appRoutingProviders, DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
