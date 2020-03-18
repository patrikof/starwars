import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planets } from './planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  
  constructor(private httpClient: HttpClient) { }

  getPlaneta(urlPlaneta: string) {
    return this.httpClient.get(urlPlaneta);
  }
}
