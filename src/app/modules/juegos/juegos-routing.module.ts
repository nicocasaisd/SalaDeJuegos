import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { WordleComponent } from './wordle/wordle.component';

const routes: Routes = [
  {path: 'mayor-menor', component: MayorMenorComponent},
  {path: 'ahorcado', component: AhorcadoComponent},
  {path: 'preguntados', component: PreguntadosComponent},
  {path: 'wordle', component: WordleComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
