import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planets } from './planets';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {

  private _cache = {};
  
  constructor(private httpClient: HttpClient) { }

  getPlaneta(urlPlaneta: string) {    
    if (!this._cache[urlPlaneta])
      this._cache[urlPlaneta] = this.httpClient.get<Planets>(urlPlaneta).pipe(map(res => res.name));
    return this._cache[urlPlaneta];
  }
}
