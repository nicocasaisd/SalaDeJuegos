import { NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosService } from '../../services/juegos.service';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    AhorcadoComponent,
    MayorMenorComponent,
    PreguntadosComponent
  ]
})
export class JuegosModule implements OnDestroy{
  constructor(private juegoService : JuegosService){
    //this.juegoService.setModuleLoaded(true);
  }
  ngOnDestroy(): void {
    console.log('Se destruye el modulo');
  }
 }
