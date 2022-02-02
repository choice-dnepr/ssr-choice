import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
// import * as firebaseServer from 'firebase-admin';

import { AppModule } from './app.module';
import { AppComponent } from './view/app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  providers: [
    // {
    //   provide: 'Firebase', useFactory: firebaseFactory
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}

// export function firebaseFactory() {
//   return firebaseServer;
// }