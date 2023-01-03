import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { Comida } from '../interfaces/Comida';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComidaService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/comidas`;

  salvarComida(comida: Comida): Observable<Comida> {
    return this.http.post<Comida>(this.apiUrl, comida);
  }
  constructor(private http: HttpClient) {}
}
