import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable, ObservedValueOf } from 'rxjs';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{

    return this.http.get<Postagem[]>('https://blogpessoal-backend-production.up.railway.app/postagens/todos', this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem>{
    return this.http.get<Postagem>(`https://blogpessoal-backend-production.up.railway.app/postagens/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://blogpessoal-backend-production.up.railway.app/nome/${nome}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]>{
    return this.http.get<Postagem[]>(`https://blogpessoal-backend-production.up.railway.app/postagens/titulo/${titulo}`, this.token)
  }

  postPostagem(postagem: Postagem) : Observable<Postagem>{

    return this.http.post<Postagem>('https://blogpessoal-backend-production.up.railway.app/postagens', postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://blogpessoal-backend-production.up.railway.app/postagens', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://blogpessoal-backend-production.up.railway.app/postagens/${id}`, this.token)
  }
}
