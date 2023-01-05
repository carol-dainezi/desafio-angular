import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/usuarios`;

  salvarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  buscarUsuario(_id: string): Observable<Usuario> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.get<Usuario>(url);
  }

  excluirUsuario(_id: string) {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.delete<Usuario>(url);
  }

  editarUsuario(_id: string, usuario: Usuario): Observable<Usuario> {
    const url = `${this.apiUrl}/${_id}`;

    return this.http.put<Usuario>(url, usuario);
  }

  mudarPermissoes(usuario: Usuario): Observable<Usuario> {
    const url = `${this.apiUrl}/isadmin/${usuario._id}`;

    const isAdmin = {
      isAdmin: !usuario.isAdmin,
    };

    return this.http.put<Usuario>(url, isAdmin);
  }

  constructor(private http: HttpClient) {}
}
