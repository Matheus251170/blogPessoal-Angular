import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{

    return this.http.get<Tema[]>('https://backendblogpessoal.herokuapp.com/tema', this.token)
  }

  postTema(tema: Tema): Observable<Tema>{

    console.log(this.token)

    return this.http.post<Tema>('https://backendblogpessoal.herokuapp.com/tema', tema, this.token)


  }
}
