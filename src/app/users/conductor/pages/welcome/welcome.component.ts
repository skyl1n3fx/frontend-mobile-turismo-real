import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../../auth/services/auth/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  constructor(
    private authSv: AuthenticationService,
    private router: Router) { }


  get auth(){
    return this.authSv.auth;
  }


  ngOnInit() {}

  logout(){
    this.router.navigate(['../../login/']);
  }


}
