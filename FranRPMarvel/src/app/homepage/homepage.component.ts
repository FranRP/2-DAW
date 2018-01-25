import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.animations';
import {SearchService} from '../search.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class HomepageComponent implements OnInit {

  constructor(public servicio: SearchService) {
  }

  ngOnInit() {
    $(function () {
      $(".texto").typed({
        strings: ["Recuerda ayudar al prójimo, mirar antes de cruzar y tratar siempre con respeto a tus mayores", "O haz como tu super héroe favorito, yo, y haz lo que te de la gana"],
        typeSpeed: 50,
        startDelay: 600,
        backSpeed: 60,
        backDelay: 500,
        showCursor: false,
      })
    })

    this.servicio.setposicion('');
  }

}
