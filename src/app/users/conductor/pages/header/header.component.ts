import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'conductor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class ConductorHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
