import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientModule } from './users/client/pages/client.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'create-account',
    loadChildren: () => import('./auth/pages/create-account/create-account.module').then( m => m.CreateAccountPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./users/client/pages/client.module').then( m => m.ClientModule)
  },
  {
    path: '**',
    loadChildren: () => import('./shared/pages/p404/p404.module').then( m => m.P404PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
