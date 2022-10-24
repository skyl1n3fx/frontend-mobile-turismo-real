import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [HeaderComponent,FooterComponent], // Declaramos los componentes
  imports: [
    CommonModule,
    IonicModule, // Para poder usar etiquetas de IONIC en los componentes
  ], 
  exports: [HeaderComponent,FooterComponent] // Indicamos que componentes permitiremos usar desde fuera
})
export class SharedModule { }
