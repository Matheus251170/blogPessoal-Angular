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
    
  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }
  getAllTema(): Observable<Tema[]>{

    return this.http.get<Tema[]>('https://blogpessoal-backend-production.up.railway.app/tema', this.token)
  }

  getByidTema(id: number): Observable<Tema>{

    return this.http.get<Tema>(`https://blogpessoal-backend-production.up.railway.app/tema/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://blogpessoal-backend-production.up.railway.app/tema/nome/${nome}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{

    return this.http.post<Tema>('https://blogpessoal-backend-production.up.railway.app/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{

    return this.http.put<Tema>('https://blogpessoal-backend-production.up.railway.app/tema', tema, this.token)
}

deleteTema(id: number){
  return this.http.delete(` https://blogpessoal-backend-production.up.railway.app/tema/${id}`, this.token)
}
}