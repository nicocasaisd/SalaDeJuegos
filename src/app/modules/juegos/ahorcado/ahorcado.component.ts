import { Component, OnDestroy, OnInit } from '@angular/core';
import { BtnSalirComponent } from "../btn-salir/btn-salir.component";
import { JuegosService } from '../../../services/juegos.service';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [BtnSalirComponent],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent implements OnInit, OnDestroy{

  constructor(public juego: JuegosService){
    for(let i=0; i<26; i++){
      this.letras.push(String.fromCharCode(97 + i));
    }
    console.log(this.letras);
  }

  letras : string[] = [];

  ngOnInit(): void {
    this.juego.setModuleLoaded(true);
    console.log('Se crea el componente');
  }
  
  
  ngOnDestroy(): void {
    this.juego.setModuleLoaded(false);
    console.log('Se destruye el componente');
  }
}
