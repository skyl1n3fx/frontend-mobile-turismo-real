import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeptosComponent } from './deptos/deptos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'reservas', component: DeptosComponent },
      { path: '**', redirectTo: 'reservas' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ClientRoutingModule { }
