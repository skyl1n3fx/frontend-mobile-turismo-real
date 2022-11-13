import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { ConductorRoutingModule } from './conductor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConductorHeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RunsComponent } from './runs/runs.component';

@NgModule({
  declarations: [HomeComponent, ConductorHeaderComponent, NavbarComponent, RunsComponent],
  imports: [
    CommonModule,
    IonicModule,
    ConductorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ConductorModule { }
