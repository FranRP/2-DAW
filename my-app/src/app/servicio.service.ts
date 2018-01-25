import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class ServicioService {
  private variableStream = new Subject<any>();

  public variable$ = this.variableStream.asObservable();

  setvariable(value) {
    this.variableStream.next(value);
  }

  constructor(private ajax:HttpClient) {}

  peticion(): Observable<any>{
    return this.ajax.get('https://restcountries.eu/rest/v2/name/aruba?fullText=true');
  }

}
