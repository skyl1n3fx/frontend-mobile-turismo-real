import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/browser_data/localstorage.service';
import { AuthenticationService } from '../../../../auth/services/auth/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  get auth(){
    return this.authSv.auth;
  }

  constructor(
    private authSv: AuthenticationService,
    private router: Router,
    private localStorageManagement: LocalstorageService) { }

  ngOnInit() {
    this.checkIfUserIsRecepcionist();
  }

  checkIfUserIsRecepcionist(){
    const userRole = this.localStorageManagement.get('usuario').user.position.id;
    if(userRole !== 3){
      this.router.navigate(['../../login/']);
    }
    console.log(userRole);
  }

  logout(){
    this.router.navigate(['../../login/']);
  }


}
