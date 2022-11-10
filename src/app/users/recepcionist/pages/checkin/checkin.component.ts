import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { BookingDetailI } from 'src/app/users/interfaces/bookingDetail.interface';
import { priceFormat } from 'src/app/utils';
import { BookingsComponent } from '../bookings/bookings.component';
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {

  constructor(private router: Router, private svBooking : BookingService, private activatedRoute: ActivatedRoute, private bookingsComponent: BookingsComponent) { }

  ngOnInit() {
    this.initCheckin();
  }

  bookingDetail: BookingDetailI = null;
  priceFormat: Function = priceFormat;

  initCheckin(){
    const bookingId = this.activatedRoute.snapshot.params.id;
    this.svBooking.getBookingDetail(bookingId).subscribe(
      (data) => {
        this.bookingDetail = data;
        console.log(data);
      },(e) => {
        console.log(e);
        this.router.navigate(['/recepcionista/reservas']);
      }
    )
  }

  getServicesPrice(){
    let price = 0;
    this.bookingDetail.servicios.forEach(service => {
      price += service.precio;
    });
    return price;
  }

  async changeCheckin(state){
    try {
      const response = await this.svBooking.changeCheckin(this.bookingDetail.id, state)
      if(response){
        this.router.navigate(['/recepcionista/reservas']);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
