import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from '../interfaces/Evento';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/eventos`;

  salvarEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.apiUrl, evento);
  }

  listarEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.apiUrl);
  }

  excluirEvento(_id: string) {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.delete<Evento>(url);
  }

  constructor(private http: HttpClient) {}
}
