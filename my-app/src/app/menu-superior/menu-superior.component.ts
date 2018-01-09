import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
dato:string;
clicks = 0;
elementos:string[]=['Objeto1','Objeto2','Objeto3','Objeto4'];

clickeame(){
  this.clicks++;
}
  constructor() { }

  ngOnInit() {
  }

}
