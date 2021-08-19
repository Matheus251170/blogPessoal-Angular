import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaPostagem: Postagem[]
  postagem: Postagem = new Postagem()
  tituloPost: string
  nomeTema: string

  tema: Tema = new Tema()
  listaTema: Tema[]
  idTema: number

  user: User = new User()
  idUser = environment.id

  key = 'data'
  reverse = true

  constructor(

    private alerta: AlertasService,
    private router: Router,
    private temaService: TemaService,
    private postagemService: PostagemService,
    public authService: AuthService
  ) { }

  ngOnInit(){

    window.scroll(0,0)

    if(environment.token == ''){
      this.alerta.showAlertInfo('Sua sessão expirou!')

      this.router.navigate(['/entrar'])
    }

    this.temaService.refreshToken()
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{

      this.listaTema = resp
    })
  }

  findByIdTema(){
    this.temaService.getByidTema(this.idTema).subscribe((resp: Tema)=>{

      this.tema = resp
    })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagem = resp
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) =>{
      this.user = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      this.alerta.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

  findByTituloPostagem(){

    if(this.tituloPost == ''){
      this.getAllPostagens()
    }
    else{
      this.postagemService.getByTituloPostagem(this.tituloPost).subscribe((resp: Postagem[]) =>{
        this.listaPostagem = resp
      })
    }
  }

  findByNomeTema(){
    if(this.nomeTema == ''){
      this.getAllTemas()
    }
    else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=>
      this.listaTema = resp)
    }
  }

}
