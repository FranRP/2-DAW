import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {
dato:string;
clicks = 0;
comprobacion:string;
palabra:any;
cantidad=5;
elementos=[{nombre:'Objeto1',estado:'Activo'},{nombre:'Objeto2',estado:'Inactivo'},{nombre:'Objeto3',estado:'Activo'},{nombre:'Objeto4',estado:'Inactivo'}];

texto:string='Si el valor del input tiene menos de 5 caracteres será verde, sino, será rojo';

resultados:any[];

constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.http.get('https://restcountries.eu/rest/v2/name/aruba?fullText=true').subscribe(data => {
    console.log(data);
  });
}

clickeame(){
  this.clicks++;
}

contador() {
  this.palabra = this.comprobacion.length;
}


}
