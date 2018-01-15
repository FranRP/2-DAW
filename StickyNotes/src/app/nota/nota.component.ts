import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  @Input() nuevoparametro:any;
  @Output() eliminarNota = new EventEmitter();

  constructor() { }

  eliminar() {
    console.log(this.nuevoparametro.titulo);
    this.eliminarNota.emit(this.nuevoparametro);
  }

}
