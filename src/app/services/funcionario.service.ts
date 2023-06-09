import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Funcionario } from '../interfaces/Funcionario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FuncionarioService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/funcionarios`;

  salvarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl, funcionario);
  }

  listarFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  buscarFuncionario(_id: string): Observable<Funcionario> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.get<Funcionario>(url);
  }

  excluirFuncionario(_id: string) {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.delete<Funcionario>(url);
  }

  editarFuncionario(
    _id: string,
    funcionario: Funcionario
  ): Observable<Funcionario> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.put<Funcionario>(url, funcionario);
  }
  constructor(private http: HttpClient) {}
}
