import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view/pages').then(m => m.MainModule),
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./view/pages').then(m => m.SignInModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./view/pages').then(m => m.StoreManagerModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./view/pages').then(m => m.StoreModule)
  },
  {
    path: 'cooperation',
    loadChildren: () => import('./view/pages').then(m => m.StoreModule)
  },
  {
    path: 'store-manager',
    loadChildren: () => import('./view/pages').then(m => m.StoreManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
