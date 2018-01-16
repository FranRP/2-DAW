import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class ServicioService {

  constructor(private ajax:HttpClient) {}

  peticion(): Observable<any>{
    return this.ajax.get('https://restcountries.eu/rest/v2/name/aruba?fullText=true');
  }

}
