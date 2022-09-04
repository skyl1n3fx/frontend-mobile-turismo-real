import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // Utilizamos el Input para recibir datos desde las páginas
  @Input() titulo : string;

  constructor() { }

  ngOnInit() {}

}
