import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin = new UserLogin

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){

    this.auth.entrar(this.userLogin).subscribe((resp: UserLogin) => {this.userLogin = resp})
  }
}
