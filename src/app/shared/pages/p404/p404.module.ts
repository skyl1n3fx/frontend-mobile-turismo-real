import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { P404PageRoutingModule } from './p404-routing.module';

import { P404Page } from './p404.page';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    P404PageRoutingModule,
    SharedModule
  ],
  declarations: [P404Page]
})
export class P404PageModule {}
