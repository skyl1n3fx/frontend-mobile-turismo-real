import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-deptos',
  templateUrl: './deptos.component.html',
  styleUrls: ['./deptos.component.scss'],
})
export class DeptosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
}
