import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL_BASE: string = environment.endpoint;

  constructor(private http: HttpClient) { }

  getPersonas() {
    return this.http.get<Person[]>(`${this.URL_BASE}/api/Persona/Consultar`);
  }

  insertarPersona(persona: Person): Observable<Person> {
    return this.http.post<Person>(`${this.URL_BASE}/api/Persona/Insertar`, persona);
  }

  //http://localhost:5230/api/Persona/Insertar

}
