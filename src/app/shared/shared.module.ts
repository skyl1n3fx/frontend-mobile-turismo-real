import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from './button/button.component';
import { MsgComponent } from './validators/error-message/msg/msg.component';



@NgModule({
  declarations: [HeaderComponent,FooterComponent,ButtonComponent, MsgComponent], // Declaramos los componentes
  imports: [
    CommonModule,
    IonicModule, // Para poder usar etiquetas de IONIC en los componentes
  ], 
  exports: [HeaderComponent,FooterComponent,ButtonComponent, MsgComponent] // Indicamos que componentes permitiremos usar desde fuera
})
export class SharedModule { }
