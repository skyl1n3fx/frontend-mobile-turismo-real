import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RunsComponent } from './runs/runs.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent
      },
      {
        path: 'carreras',
        component: RunsComponent
      },
      {
        path: '**',
        redirectTo: 'deptos'
      }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ConductorRoutingModule { }
