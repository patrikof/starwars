import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Species } from './species';

@Injectable({
  providedIn: 'root'
})
export class RacaService {

  constructor(private httpClient: HttpClient) { }

  getRaca(urlRaca: string) {    
    return  this.httpClient.get<Species>(urlRaca);
  }
}
