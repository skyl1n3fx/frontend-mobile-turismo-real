import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/services/browser_data/localstorage.service';
@Component({
  selector: 'recepcionist-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private localStorageManagement: LocalstorageService) { }

  ngOnInit() {}

  logout(){
    this.localStorageManagement.clear();
    //this.canvas.
    this.router.navigate(['/login']);
  }

}
