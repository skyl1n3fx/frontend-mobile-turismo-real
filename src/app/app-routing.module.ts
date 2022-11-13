import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';

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
    path: 'recepcionista',
    loadChildren: () => import('./users/recepcionist/pages/recepcionist.module').then( m => m.RecepcionistModule),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },
  {
    path: 'conductor',
    loadChildren: () => import('./users/conductor/pages/conductor.module').then( m => m.ConductorModule),
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
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
