import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { BookingDetailI } from 'src/app/users/interfaces/bookingDetail.interface';
import { priceFormat } from 'src/app/utils';
import { BookingService } from '../../services/booking.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router, private svBooking: BookingService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initCheckout();
  }

  bookingDetail: BookingDetailI = null;
  priceFormat: Function = priceFormat;

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
    )
  }

  getServicesPrice(){
    let price = 0;
    this.bookingDetail.servicios.forEach(service => {
      price += service.precio;
    });
    return price;
  }

  async changeCheckout(state){
    try {
      const response = await this.svBooking.changeCheckout(this.bookingDetail.id, state)
      if(response){
        this.router.navigate(['/recepcionista/reservas']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
