import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { DeptosComponent } from './deptos/deptos.component';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [HomeComponent,DeptosComponent],
  imports: [
    CommonModule,
    IonicModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
