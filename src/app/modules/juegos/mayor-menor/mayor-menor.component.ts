import { Component, OnDestroy, OnInit } from '@angular/core';
import { BtnSalirComponent } from "../btn-salir/btn-salir.component";
import { JuegosService } from '../../../services/juegos.service';

interface Carta {
  numero : number;
  palo : string;
}


@Component({
  selector: 'app-mayor-menor',
  standalone: true,
  imports: [BtnSalirComponent],
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css'
})

export class MayorMenorComponent implements OnDestroy, OnInit {
  
  constructor(public juego: JuegosService){
    this.generateDeck();
  }
  

  mazo: Carta[] = [];

  ngOnInit(): void {
    this.juego.setModuleLoaded(true);
    console.log('Se crea el componente');
  }
  
  
  ngOnDestroy(): void {
    this.juego.setModuleLoaded(false);
    console.log('Se destruye el componente');
  }

  generateDeck() {
    const palos = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const numeros = [2,3,4,5,6,7,8,9,10,11,12,13,14];

    for (const palo of palos) {
      for (const numero of numeros) {
        this.mazo.push({ numero, palo });
      }
    }
}
