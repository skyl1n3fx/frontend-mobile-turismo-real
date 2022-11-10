import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeptosComponent } from './deptos/deptos.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChecklistComponent } from './checklist/checklist.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DeptosComponent
      },
      {
        path: 'reservas',
        component: BookingsComponent,
      },
      {
        path: 'checkin/:id',
        component: CheckinComponent,
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      {
        path: 'checklist',
        component: ChecklistComponent,
      },
      {
        path: '**',
        redirectTo: 'deptos'
      }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RecepcionistRoutingModule { }
