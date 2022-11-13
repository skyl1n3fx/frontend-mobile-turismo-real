/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { BookingDetailI } from 'src/app/users/interfaces/bookingDetail.interface';
import { priceFormat } from 'src/app/utils';
import { BookingService } from '../../services/booking.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { MsgService } from '../../../../services/messages/msg.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  bookingDetail: BookingDetailI = null;
  priceFormat: (price: number) => string | 0 = priceFormat;

  constructor(private router: Router, private svBooking: BookingService, private activatedRoute: ActivatedRoute, private alertController: AlertController, private loadingController: LoadingController, private msg: MsgService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.initCheckout();
  }

  async changeCheckoutStatus(header: string, action: string) {
    const alert = await this.alertController.create({
      header,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            this.changeCheckout(action);
          },
        },
      ],
    });

    await alert.present();
  }


  initCheckout(){
    const bookingId = this.activatedRoute.snapshot.params.id;
    this.svBooking.getBookingDetail(bookingId).subscribe(
      (data) => {
        this.bookingDetail = data;
        console.log(data);
      },(e) => {
        console.log(e);
        this.router.navigate(['/recepcionista/reservas']);
      }
    );
  }

  getServicesPrice(){
    let price = 0;
    this.bookingDetail.servicios.forEach(service => {
      price += service.precio;
    });
    return price;
  }

  async changeCheckout(state){
    const loading = await this.loadingController.create({
      message: 'Cargando ...'
    });

    await loading.present();
    try {
      const response = await this.svBooking.changeCheckout(this.bookingDetail.id, state);
      if(response){
        loading.dismiss();
        this.router.navigate(['/recepcionista/reservas']);
      }
    } catch (error) {
      loading.dismiss();
      console.log(error);
      this.msg.createAlert('Oops, lo sentimos! :(','El servicio no se encuentra disponible.','');
    }
  }

  goToChecklist(){
    this.router.navigate([`/recepcionista/${this.bookingDetail.vivienda.id}/checklist/${this.bookingDetail.checkout_pk}`]);
  }
}
