import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Species } from './species';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RacaService {  

  private _cache = {};

  constructor(private httpClient: HttpClient) { }

  getRaca(urlRaca: string) {    
    if (!this._cache[urlRaca])
      this._cache[urlRaca] = this.httpClient.get<Species>(urlRaca).pipe(map(res => res.name));
    return this._cache[urlRaca];    
  }
}
