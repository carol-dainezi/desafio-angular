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

  listarBebidas(): Observable<Bebida[]> {
    return this.http.get<Bebida[]>(this.apiUrl);
  }

  buscarBebida(_id: string): Observable<Bebida> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.get<Bebida>(url);
  }

  excluirBebida(_id: string) {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.delete<Bebida>(url);
  }

  editarBebida(_id: string, bebida: Bebida): Observable<Bebida> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.put<Bebida>(url, bebida);
  }

  constructor(private http: HttpClient) {}
}
