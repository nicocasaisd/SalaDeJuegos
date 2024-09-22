import { Component, OnDestroy, OnInit } from '@angular/core';
import { BtnSalirComponent } from "../btn-salir/btn-salir.component";
import { JuegosService } from '../../../services/juegos.service';

@Component({
  selector: 'app-mayor-menor',
  standalone: true,
  imports: [BtnSalirComponent],
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css'
})
export class MayorMenorComponent implements OnDestroy, OnInit {
  
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
