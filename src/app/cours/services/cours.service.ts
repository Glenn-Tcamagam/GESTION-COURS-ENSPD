import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Cours } from '../models/cours.model';
import { AddCoursRequest } from '../models/add-cours-request.model';
import { UpdateCoursRequest } from '../models/update-cours-request.model';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http:HttpClient) { }

  addCours(model: AddCoursRequest): Observable<void>     //AddCoursRequest provient du back end
  {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/cours`, model);
  }

  getAllCours(): Observable<Cours[]>{
    return this.http.get<Cours[]>(`${environment.apiBaseUrl}/api/cours`)
  }

  getCoursById(id: string): Observable<Cours> {
    return this.http.get<Cours>(`${environment.apiBaseUrl}/api/cours/${id}`);
  }

  updateCours(id: string, updateCoursRequest: UpdateCoursRequest): Observable<Cours> {
    return this.http.put<Cours>(`${environment.apiBaseUrl}/api/cours/${id}`, updateCoursRequest);
  }

  deleteCours(id: string): Observable<Cours> {
    return this.http.delete<Cours>(`${environment.apiBaseUrl}/api/cours/${id}`)
  }


}
