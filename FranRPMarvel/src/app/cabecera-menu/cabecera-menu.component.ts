import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera-menu',
  templateUrl: './cabecera-menu.component.html',
  styleUrls: ['./cabecera-menu.component.css']
})
export class CabeceraMenuComponent implements OnInit {

  heroes:any=['deadpool','hulk','wolverine','america'];

  constructor() { }

  ngOnInit() {
  }

}
