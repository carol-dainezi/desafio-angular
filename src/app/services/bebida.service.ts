import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bebida } from '../interfaces/Bebida';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BebidaService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/bebidas`;

  salvarBebida(bebida: Bebida): Observable<Bebida> {
    return this.http.post<Bebida>(this.apiUrl, bebida);
  }
  constructor(private http: HttpClient) {}
}
