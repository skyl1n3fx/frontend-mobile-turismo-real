import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/browser_data/localstorage.service';
import { Offcanvas } from "bootstrap";
@Component({
  selector: 'recepcionist-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private localStorageManagement: LocalstorageService, private canvas: Offcanvas) { }

  ngOnInit() {}

  logout(){
    const offcanvasNavbar = document.querySelector("#offcanvasNabar");
    console.log(offcanvasNavbar);
    this.canvas.getInstance(offcanvasNavbar).hide();
    this.localStorageManagement.clear();
    //this.canvas.
    this.router.navigate(['/login']);
  }

}
