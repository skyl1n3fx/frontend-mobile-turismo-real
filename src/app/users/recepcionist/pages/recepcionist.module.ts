import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { DeptosComponent } from './deptos/deptos.component';
import { RecepcionistRoutingModule } from './recepcionist-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingsComponent } from './bookings/bookings.component';
import { CheckinComponent } from './checkin/checkin.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecepcionistHeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HomeComponent, DeptosComponent, BookingsComponent, CheckinComponent, CheckoutComponent, ChecklistComponent, NavbarComponent, RecepcionistHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    RecepcionistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [BookingsComponent]
})
export class RecepcionistModule { }
