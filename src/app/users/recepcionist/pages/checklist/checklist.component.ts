/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { BookingService } from '../../services/booking.service';
import { BookingDetailI } from 'src/app/users/interfaces/bookingDetail.interface';
import { AlertController } from '@ionic/angular';
import { priceFormat } from 'src/app/utils';
import { CheckListI, DamageTableI } from 'src/app/users/interfaces/checkList.interface';
@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent implements OnInit {

  checkOutId: number | null = null;
  bookingDetail: BookingDetailI = null;
  rooms: CheckListI[] = [];
  priceFormat: (price: number) => string | 0 = priceFormat;

  damageTable: DamageTableI[] = [
    { code: '1', percent: 0, name: 'Perfecto' },
    { code: '2', percent: 20, name: 'Buen estado' },
    { code: '3', percent: 40, name: 'Parc. dañado' },
    { code: '4', percent: 60, name: 'Dañado' },
    { code: '5', percent: 80, name: 'Muy dañado' },
    { code: '6', percent: 100, name: 'Inutilizable' },
  ];

  constructor(private router: Router, private svBooking: BookingService, private activatedRoute: ActivatedRoute, private alertController: AlertController, public location: Location) { }

  ngOnInit() {}

  ionViewWillEnter(){
    this.initProductsDetails();
  }

  async saveProductsAlert(header: string) {
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
            this.saveProducts();
          },
        },
      ],
    });

    await alert.present();
  }

  async initProductsDetails(){
    const apartmentId = this.activatedRoute.snapshot.params.id_vivienda;
    this.checkOutId = this.activatedRoute.snapshot.params.id_checkout;
    console.log(this.checkOutId);
    try {
      const response = await this.svBooking.getProductsDetail(apartmentId);
      this.rooms = response;
      console.log(response);
    } catch (error) {
      console.log(error);
      this.router.navigate(['/recepcionista/reservas']);
    }
  }

  async saveProducts(){
    const products = [];
    this.rooms.forEach(room => (
      room.detalle_sala.tipo_sala.detalle_producto.forEach(product => {
        products.push({
          pk: product.id_detalle,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          state_id: product.producto.estado.id
        });
      }
    )));
    console.log(products);
    try {
      const response = await this.svBooking.changeProductsState(products);
      if(response){
        const responsePenalty = await this.svBooking.updateCheckOutPenalty(this.checkOutId);
        console.log(responsePenalty);
        this.location.back();
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }


}
