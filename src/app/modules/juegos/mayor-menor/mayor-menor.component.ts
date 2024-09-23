import { Component, OnDestroy, OnInit } from '@angular/core';
import { BtnSalirComponent } from '../btn-salir/btn-salir.component';
import { JuegosService } from '../../../services/juegos.service';

interface Card {
  numero: number;
  palo: string;
}

@Component({
  selector: 'app-mayor-menor',
  standalone: true,
  imports: [BtnSalirComponent],
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css',
})
export class MayorMenorComponent implements OnDestroy, OnInit {
  
  constructor(public juego: JuegosService) {
    this.generateDeck();
    this.mezclarMazo();
    console.log(this.mazo);
    this.currentCard = this.mazo.pop();
    this.nextCard = this.mazo.pop();
    console.log(this.currentCard, this.nextCard);
    this.currentCardImage = this.getCardImage(this.currentCard);
  }

  mazo: Card[] = [];

  currentCard: any;
  nextCard: any;
  currentCardImage : string = '';

  ngOnInit(): void {
    this.juego.setModuleLoaded(true);
    console.log('Se crea el componente');
  }

  ngOnDestroy(): void {
    this.juego.setModuleLoaded(false);
    console.log('Se destruye el componente');
  }

  generateDeck() {
    const palos = ['hearts', 'spades'];
    const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    for (const palo of palos) {
      for (const numero of numeros) {
        this.mazo.push({ numero, palo });
      }
    }
  }

  mezclarMazo(){
    this.mazo.sort(()=> Math.random() - 0.5);
  }

  getNextCard(){
    if(this.mazo.length > 0){
      this.currentCard = this.nextCard;
      this.nextCard = this.mazo.pop();
      
    }else{
      console.log('No hay más cartas');
    }
  }

  higherHandler(){
    setTimeout(()=>{
      this.getNextCard()
    }, 500);
  }

  guessHigher(){
    return this.currentCard.numero < this.nextCard.numero;
  }

  guessLower(){
    return this.currentCard.numero > this.nextCard.numero;
  }

  getCardImage(card : Card) : string{
    return "/8bit-cards/"+card.numero.toString()+"-"+card.palo+".png";
  }
}
