import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosService } from '../../services/juegos.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule {
  constructor(private juegoService : JuegosService){
    this.juegoService.setModuleLoaded(true);
  }
 }
