import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(

    private router: Router,
    private temaService: TemaService
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      alert('Sua sessão expirou!')

      this.router.navigate(['/entrar'])
    }

    this.temaService.refreshToken()
  }

}
