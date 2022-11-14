import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/browser_data/localstorage.service';
import { RunsI, Servicio } from 'src/app/users/interfaces/runs.interface';
import { ConductorService } from '../../services/conductor.service';
import { priceFormat } from 'src/app/utils';
@Component({
  selector: 'app-runs',
  templateUrl: './runs.component.html',
  styleUrls: ['./runs.component.scss'],
})
export class RunsComponent implements OnInit {

  runs: Servicio[] = null;
  test = '';
  priceFormat = priceFormat;

  constructor(private router: Router, private svConductor: ConductorService, private localStorageManagement: LocalstorageService) { }

  ngOnInit() {
    this.ionViewWillEnter();
  }

  ionViewWillEnter(){
    this.getRuns();
  }

  getRuns(){
    const userLocalStorage = this.localStorageManagement.get('usuario');
    console.log(userLocalStorage.user.pk);
    this.svConductor.getRuns(userLocalStorage.user.pk).subscribe(
      (data) => {
        this.runs = data.servicios;
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
