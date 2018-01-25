import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

  arrayContenido:any;

  constructor(public servicio:SearchService) { }

  ngOnInit() {
    // this.servicio.peticion('events',0).subscribe(data => {
    //   this.arrayContenido = data.data.results;
    //   //.images[0].path+'/portrait_xlarge.jpg';
    // }
    // )
  }

  probando() {
    console.log(this.arrayContenido);
  }


}
