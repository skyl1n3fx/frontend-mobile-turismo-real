import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/browser_data/localstorage.service';
import { Bookings } from 'src/app/users/interfaces/bookings.interface';
import { BookingService } from '../../services/booking.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {

  constructor(private router: Router, private svBooking : BookingService, private localStorageManagement : LocalstorageService) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.getBookings();
  }

  bookings:Bookings[] = [];
  test: string = "";

  getBookings(){
    const userLocalStorage = this.localStorageManagement.get("usuario");
    console.log(userLocalStorage.user.pk);
    this.svBooking.getBooking(userLocalStorage.user.pk).subscribe(
      (data) => {
        this.bookings = data;
        console.log(data);
      },(e) => {
        console.log(e);
      }
    )
  }

  goToCheckIn(bookingId: number){
    this.router.navigate(['/recepcionista/checkin',bookingId]);
  }

  goToCheckOut(bookingId: number){
    this.router.navigate(['/recepcionista/checkout',bookingId]);
  }

}
