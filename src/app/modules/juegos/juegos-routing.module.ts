import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { WordleComponent } from './wordle/wordle.component';

const routes: Routes = [
  {path: 'mayor-menor', loadComponent: ()=> import('./mayor-menor/mayor-menor.component').then(m=>m.MayorMenorComponent)},
  //{path: 'mayor-menor', component: MayorMenorComponent},
  {path: 'ahorcado', loadComponent: ()=> import('./ahorcado/ahorcado.component').then(m=>m.AhorcadoComponent)},
  //{path: 'ahorcado', component: AhorcadoComponent},
  {path: 'preguntados', loadComponent: ()=> import('./preguntados/preguntados.component').then(m=>m.PreguntadosComponent)},
  //{path: 'preguntados', component: PreguntadosComponent},
  {path: 'wordle', loadComponent: ()=> import('./wordle/wordle.component').then(m=>m.WordleComponent)},
  //{path: 'wordle', component: WordleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
