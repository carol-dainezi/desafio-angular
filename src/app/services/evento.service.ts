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

  constructor(private http: HttpClient) {}
}
