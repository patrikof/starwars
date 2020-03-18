import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planets } from './planets';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  
  constructor(private httpClient: HttpClient) { }

  getPlaneta(urlPlaneta: string) {
    console.log(urlPlaneta);
    let planeta: Observable<Planets> = this.httpClient.get<Planets>(urlPlaneta);
    return planeta;
  }
}
