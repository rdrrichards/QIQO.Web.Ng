import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { WelcomeComponent } from './home/welcome.component';

import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
