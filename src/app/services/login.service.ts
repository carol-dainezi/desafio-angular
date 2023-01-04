import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Login } from '../interfaces/Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/login`;

  fazerLogin(login: Login): Observable<Login> {
    return this.http.post<Login>(this.apiUrl, login);
  }

  constructor(private http: HttpClient) {}
}
