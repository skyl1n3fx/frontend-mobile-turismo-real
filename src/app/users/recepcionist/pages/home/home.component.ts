import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private authSv : AuthenticationService,
    private router : Router) { }

  ngOnInit() {}

  logout(){
    this.router.navigate(['../../login/']);
  }


}
