import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumo } from '../Consumo';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  protected url: string = "http://localhost:3000/cosmeticos"

  constructor( private http: HttpClient ) { }
  
  consumoAPI(): Observable<Consumo[]> {
    return this.http.get<Consumo[]>(this.url)
  }
}
