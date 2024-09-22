import { Component, OnDestroy, OnInit } from '@angular/core';
import { BtnSalirComponent } from "../btn-salir/btn-salir.component";
import { JuegosService } from '../../../services/juegos.service';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [BtnSalirComponent],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent implements OnInit, OnDestroy{

  constructor(public juego: JuegosService){

  }

  ngOnInit(): void {
    this.juego.setModuleLoaded(true);
    console.log('Se crea el componente');
  }
  
  
  ngOnDestroy(): void {
    this.juego.setModuleLoaded(false);
    console.log('Se destruye el componente');
  }
}
