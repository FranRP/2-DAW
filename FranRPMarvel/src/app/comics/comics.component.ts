import {Component, OnInit} from '@angular/core';
import {slideToLeft} from '../router.animations';
import {SearchService} from '../search.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  animations: [slideToLeft()],
  host: {'[@routerTransition]': ''}
})
export class ComicsComponent implements OnInit {

  arrayComics: any;
  offset: any = 0;
  variable: any = 'inactivo';
  filtro: any;


  constructor(public servicio: SearchService) {
  }


  ngOnInit() {
    this.servicio.peticionComics(this.offset).subscribe(data => {
        this.arrayComics = data.data.results;
      }
    )
    this.servicio.setposicion('Comics');
  }

  mostrar(event) {
    let value = event.path[2].lastElementChild.attributes[1].nodeValue;
    let elemento = value.split(' ')[0];
    if ($('.' + elemento).css('display') == 'block') {
      $('.' + elemento).fadeOut();
    } else {
      $('.' + elemento).fadeIn();
    }

  }

  prueba() {
    this.offset += 20;
    this.servicio.peticionComics(this.offset).subscribe(data => {
        let contenido = data.data.results;
        for (let i = 0; i < contenido.length; i++) {
          this.arrayComics.push(contenido[i]);
        }
      }
    )
  }

}
