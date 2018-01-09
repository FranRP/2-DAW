import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
dato = "fran";
clicks = 0;
rojo = "red";

clickeame(){
  this.clicks++;
}
  constructor() { }

  ngOnInit() {
  }

}
