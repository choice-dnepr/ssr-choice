import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../environments/environment';

import { AppComponent } from './view/app.component';
import { combineReducers } from './store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShipFooterModule } from './view/modules/ship-footer/ship-footer.module';
import { SharedModule } from './view/shared/shared.module';
import { MainModule } from './view/pages/main/main.module';
import { ShipHeaderModule } from '@view/modules/ship-header/ship-header.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    StoreModule.forRoot(combineReducers, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MainModule,
    ShipHeaderModule,
    ShipFooterModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
