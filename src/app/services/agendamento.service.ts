import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Agendamento } from '../interfaces/Agendamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/agendamentos`;

  salvarAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiUrl, agendamento);
  }

  listarAgendamentos(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiUrl);
  }

  listarAgendamentosPorUsuario(_id: string): Observable<Agendamento[]> {
    const url = `${this.apiUrl}/usuario/${_id}`;

    return this.http.get<Agendamento[]>(url);
  }

  listarAgendamentosPorEvento(_id: string): Observable<Agendamento[]> {
    const url = `${this.apiUrl}/evento/${_id}`;

    return this.http.get<Agendamento[]>(url);
  }

  excluirAgendamento(_id: string) {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.delete<Agendamento>(url);
  }

  editarAgendamento(
    _id: string,
    agendamento: Agendamento
  ): Observable<Agendamento> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.put<Agendamento>(url, agendamento);
  }

  constructor(private http: HttpClient) {}
}
