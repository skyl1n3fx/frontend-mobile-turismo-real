import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/browser_data/localstorage.service';
import { Bookings } from 'src/app/users/interfaces/bookings.interface';
import { ConductorService } from '../../services/conductor.service';
@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.scss'],
})
export class RunsComponent implements OnInit {

  bookings: Bookings[] = null;
  test = '';

  constructor(private router: Router, private svConductor: ConductorService, private localStorageManagement: LocalstorageService) { }

  ngOnInit() {

  }

  ionViewWillEnter(){
    this.getBookings();
  }

  getBookings(){
    const userLocalStorage = this.localStorageManagement.get('usuario');
    console.log(userLocalStorage.user.pk);
    this.svConductor.getBooking(userLocalStorage.user.pk).subscribe(
      (data) => {
        this.bookings = data;
        console.log(data);
      },(e) => {
        console.log(e);
      }
    );
  }

  goToCheckIn(bookingId: number){
    this.router.navigate(['/recepcionista/checkin',bookingId]);
  }

  goToCheckOut(bookingId: number){
    this.router.navigate(['/recepcionista/checkout',bookingId]);
  }

}
