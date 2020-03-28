import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { People } from '../models/people';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }
  listarAnterior(urlPrevious: string) {
    return this.httpClient.get<People>(urlPrevious);
  }
  listarProxima(urlNext: string) {
    return this.httpClient.get<People>(urlNext);
  }
  listar() {
    const url = 'https://swapi.co/api/people/';
    const params = new HttpParams().set('page','1');
    return this.httpClient.get<People>(url,{params});
  }
}