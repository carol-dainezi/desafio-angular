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

  listarComidas(): Observable<Comida[]> {
    return this.http.get<Comida[]>(this.apiUrl);
  }

  buscarComida(_id: string): Observable<Comida> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.get<Comida>(url);
  }

  excluirComida(_id: string) {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.delete<Comida>(url);
  }

  editarBebida(_id: string, comida: Comida): Observable<Comida> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.put<Comida>(url, comida);
  }

  constructor(private http: HttpClient) {}
}
