import { Component, OnDestroy, OnInit } from '@angular/core';
import { BtnSalirComponent } from '../btn-salir/btn-salir.component';
import { JuegosService } from '../../../services/juegos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [BtnSalirComponent, CommonModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css',
})
export class AhorcadoComponent implements OnInit, OnDestroy {
  constructor(public juego: JuegosService) {
    this.initializeAlphabet();
    this.currentWord = this.getRandomWord();
    this.initilizeWord();
  }

  letras: string[] = [];
  palabras: string[] = ['PERRO', 'GATO', 'POLLO'];

  currentWord: string | any = '';
  currentWordList: string[] = [];
  wordLength!: number;
  revealedLetters: boolean[] = [];

  partesDelAhorcado = ['rope', 'head', 'body', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];
  cantidadDeErrores : number = 0;

  gameEnded = false;

  drawHangman(){
    const part = document.getElementById(this.partesDelAhorcado[this.cantidadDeErrores]);
    // Chequeamos si vuelve un elemento
    if(part){
      part.style.visibility = 'visible';
    }
  }

  getRandomWord() {
    const index = Math.floor(Math.random() * this.palabras.length);
    return this.palabras[index];
  }

  initializeAlphabet() {
    for (let i = 0; i < 26; i++) {
      this.letras.push(String.fromCharCode(97 + i));
    }
  }

  initilizeWord() {
    // Split de la palabra
    this.currentWordList = this.currentWord.split('');
    this.wordLength = this.currentWord.length;
    // Inicializamos array de booleanos
    this.revealedLetters = new Array(this.currentWord.length).fill(false);
    this.revealedLetters[1] = true; // borar
    console.log(this.currentWordList);
    console.log(this.revealedLetters);
  }

  revealLetter(letter: string) {
    // Chequeamos si la letra existe
    letter = letter.toUpperCase();
    console.log(letter);

    let letterFound = false;
    
    for (let i = 0; i < this.currentWordList.length; i++) {
      console.log(this.currentWordList[i]);
      if (letter === this.currentWordList[i]) {
        this.revealedLetters[i] = true;
        letterFound = true;
      }
    }
    if(!letterFound){
      this.drawHangman();
      this.cantidadDeErrores ++;

    }
    console.log(this.revealedLetters);
    // Deshabilitamos el boton de esa letra
    this.disableButton(letter);

  }

  disableButton(letter : string){
    const button = document.getElementById('letra-'+letter.toLowerCase()) as HTMLButtonElement;
    // Chequeamos si vuelve un elemento
    if(button){
      button.disabled = true;
      button.style.backgroundColor = 'grey';
    }
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
