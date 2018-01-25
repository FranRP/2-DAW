import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import {slideToBottom} from '../router.animations';

@Component({
  selector: 'app-pjinfo',
  templateUrl: './pjinfo.component.html',
  styleUrls: ['./pjinfo.component.css'],
  animations: [slideToBottom()],
  host: {'[@routerTransition]': ''}
})
export class PjinfoComponent implements OnInit {

  variable: any;
  arraySeries: any;
  arrayStories: any;
  nombre: string;

  constructor(public servicio: SearchService) {
  }

  ngOnInit() {
    this.servicio.pj$.subscribe(data => {
        this.variable = data;
        this.arraySeries = this.variable.series.items;
        this.arrayStories = this.variable.stories.items;
        this.nombre = this.variable.name;
        this.servicio.setposicion('Characters / ' + this.nombre);
      }
    )

  }

}
