import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Fornecedor } from '../interfaces/Fornecedor';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/fornecedores`;

  salvarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.apiUrl, fornecedor);
  }

  listarFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.apiUrl);
  }

  buscarFornecedor(_id: string): Observable<Fornecedor> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.get<Fornecedor>(url);
  }

  excluirFornecedor(_id: string) {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.delete<Fornecedor>(url);
  }

  editarFornecedor(
    _id: string,
    fornecedor: Fornecedor
  ): Observable<Fornecedor> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.put<Fornecedor>(url, fornecedor);
  }

  constructor(private http: HttpClient) {}
}
