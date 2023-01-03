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

  constructor(private http: HttpClient) {}
}
