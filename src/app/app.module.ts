import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import * as firebaseClient from 'firebase';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../environments/environment';

import { SharedModule } from './view/shared/shared.module';
import { AppComponent } from './view/app.component';
import { MainModule } from './view/pages';
import { combineReducers } from './store/reducers';
import { ShipFooterModule, ShipHeaderModule } from './view/modules';


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
    ShipHeaderModule,
    ShipFooterModule
  ],
  providers: [
    // {
    //   provide: 'Firebase', useFactory: firebaseFactory
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export function firebaseFactory() {
//   const config = {
//     apiKey: "AIzaSyC3T7TeNWal90On49odJmKmlyNcVcfH4Ps",
//     authDomain: "choicednepr-77627.firebaseapp.com",
//     projectId: "choicednepr-77627",
//     storageBucket: "choicednepr-77627.appspot.com",
//     messagingSenderId: "414508584947",
//     appId: "1:414508584947:web:d8699a2fcb4a20dd118c86",
//     measurementId: "G-NXEW2FS9MT"
//   };

//   firebaseClient.initializeApp(config);

//   return firebaseClient;
// }
