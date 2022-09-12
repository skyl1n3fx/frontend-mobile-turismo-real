import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  loading : any;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
    ) { }

  async createToast(header: string = 'xd', msg:string = 'No hay nada',duration = 1500) {
    const toast = await this.toastController.create({
      header: header,
      message: msg,
      duration: duration,
      icon: 'globe',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel'
        }
      ]
    });

    await toast.present();
  }

  async createAlert(header:string, message:string, sub:string) {
    const alert = await this.alertController.create({
      header: header,
      subHeader: sub,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }


}
