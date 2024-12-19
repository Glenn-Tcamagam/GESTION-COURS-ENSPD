import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // URL de l'API Laravel

  constructor(private http: HttpClient) {}

  register(data:any): Observable<any> {
    const mappedData = {
      name: data.nom,
      subname: data.prenom,
      email: data.email,
      role: data.role,
      password: data.password,
      password_confirmation: data.password
    };
    return this.http.post(`${this.apiUrl}/register`,mappedData);
  }
  
  login(data:any): Observable<any> {
    const mappedData = {
      email: data.email,
      password: data.password,
    };
    return this.http.post(`${this.apiUrl}/login`,mappedData);
  }

  addCours(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cours`, data);
  }
}
