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

  salvarEvento(evento: Evento): Observable<any> {
    console.log(evento);
    return this.http.post<any>(this.apiUrl, evento);
  }

  constructor(private http: HttpClient) {}
}
