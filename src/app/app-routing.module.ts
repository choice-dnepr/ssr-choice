import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./view/pages').then(m => m.MainModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
