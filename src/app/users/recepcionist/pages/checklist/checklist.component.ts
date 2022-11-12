/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { BookingDetailI } from 'src/app/users/interfaces/bookingDetail.interface';
import { AlertController } from '@ionic/angular';
import { priceFormat } from 'src/app/utils';
import { DamageTableI, ProductDetailI } from 'src/app/users/interfaces/checkList.interface';
@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit {

  bookingDetail: BookingDetailI = null;
  rooms: ProductDetailI[] = [];
  damageTable: DamageTableI[] = [
    { code: '1', percent: 0, name: 'Perfecto' },
    { code: '2', percent: 20, name: 'Buen estado' },
    { code: '3', percent: 40, name: 'Parc. dañado' },
    { code: '4', percent: 60, name: 'Dañado' },
    { code: '5', percent: 80, name: 'Muy dañado' },
    { code: '6', percent: 100, name: 'Inutilizable' },
  ];
  priceFormat: (price: number) => string | 0 = priceFormat;

  constructor(private router: Router, private svBooking: BookingService, private activatedRoute: ActivatedRoute, private alertController: AlertController) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.initProductsDetails();
  }

  async changeCheckinStatus(header: string, action: string) {
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

          },
        },
      ],
    });

    await alert.present();
  }

  initBookingDetails(){
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

  async initProductsDetails(){
    const bookingId = this.activatedRoute.snapshot.params.id;
    try {
      const response = await this.svBooking.getProductsDetail(bookingId);
      this.rooms = response;
      console.log(response);
    } catch (error) {
      console.log(error);
      this.router.navigate(['/recepcionista/reservas']);
    }
  }

  async saveProducts(){
    const productsToChange = this.rooms.map(room => (
      {
        pk: room.detalle_producto.id_detalle,
        // eslint-disable-next-line @typescript-eslint/naming-convention
        state_id: room.detalle_producto.estado.id
      }
      // room.forEach((product) => {
      //   this.svBooking.changeProductsState(product.id, product.estado);
      // });
      ));
      try {
        const response = await this.svBooking.changeProductsState(productsToChange);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
  }


}
