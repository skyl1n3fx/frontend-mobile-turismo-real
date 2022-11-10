import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss'],
})
export class BookingsComponent implements OnInit {

  constructor(private router: Router, private svBooking : BookingService) { }

  ngOnInit() {
  }

  bookings:object[]=[
    {cliente: "Lucas Menares", rut: "19.410.215-1", hotel: "Gran Avenida", checkIn: "10/10/2022", estadoCheckIn: "Pendiente", checkOut: "12/10/2022", estadoCheckOut: "Pendiente", direccion: "Calle prueba #123"},
    {cliente: "Jorge Quintui", rut: "20.123.456-1", hotel: "Gran Avenida", checkIn: "12/10/2022", estadoCheckIn: "Pendiente", checkOut: "14/10/2022", estadoCheckOut: "Pendiente", direccion: "Calle prueba #123",
  acompaniantes: [
    {nombre: "Juan"},
    {nombre: "José"}
  ],
  servicios: [
    {nombre: "Transporte Ida"},
    {nombre: "Transporte Vuelta"},
  ]}
  ];

  getBookings(){
    this.svBooking.getBooking().subscribe(
      (data) => {
        this.bookings = data;
        console.log(data);
      },(e) => {
        console.log(e);
      }
    )
  }

}
