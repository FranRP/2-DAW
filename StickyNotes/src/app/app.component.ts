import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nota= {
    titulo:"",
    iden:0;
  };

  id = 0;
  title:string;

  arrayNotas:any=[];

  clickeame(){
    this.title = window.prompt('Dime un título');
    this.arrayNotas.push({titulo: this.title, iden:++this.id});
  }

  borrarNota(event) {
    this.arrayNotas.splice(this.arrayNotas.indexOf(event),1);

  }

}
