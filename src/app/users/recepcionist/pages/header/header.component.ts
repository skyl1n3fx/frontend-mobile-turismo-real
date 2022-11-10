import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'recepcionist-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class RecepcionistHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
