import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { DeptosComponent } from './deptos/deptos.component';
import { RecepcionistRoutingModule } from './recepcionist-routing.module';



@NgModule({
  declarations: [HomeComponent,DeptosComponent],
  imports: [
    CommonModule,
    IonicModule,
    RecepcionistRoutingModule
  ]
})
export class RecepcionistModule { }
