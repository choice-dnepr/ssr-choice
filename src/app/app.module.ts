import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../environments/environment';

import { SharedModule } from './view/shared/shared.module';
import { AppComponent } from './view/app.component';
import { MainModule } from './view/pages';
import { combineReducers } from './store/reducers';
import { ShipHeaderModule } from './view/modules';


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
    SharedModule,
    MainModule,
    ShipHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
