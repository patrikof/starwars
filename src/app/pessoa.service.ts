import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { People } from './people';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private httpClient: HttpClient) { }
  listarAnterior(urlPrevious) {
    return this.httpClient.get<People>(urlPrevious);
  }
  listarProxima(urlNext) {
    return this.httpClient.get<People>(urlNext);
  }
  listar() {
    return this.httpClient.get<People>('https://swapi.co/api/people/?page=1');
  }
}