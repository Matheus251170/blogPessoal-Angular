import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [
  {path: 'entrar', component:EntrarComponent},
  {path: 'cadastrar', component:CadastrarComponent},
  {path: '', redirectTo:'entrar', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
