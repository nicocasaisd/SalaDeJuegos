import { Component, OnDestroy, OnInit } from '@angular/core';
import { BtnSalirComponent } from '../btn-salir/btn-salir.component';
import { JuegosService } from '../../../services/juegos.service';
import { CommonModule } from '@angular/common';
import { initializeAnalytics } from '@angular/fire/analytics';

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
    console.log(this.currentWordList);
    console.log(this.revealedLetters);
  }

  revealLetter(letter: string) {
    // Chequeamos si la letra existe
    letter = letter.toUpperCase();
    console.log(letter);
    
    for (let i = 0; i < this.currentWordList.length; i++) {
      console.log(this.currentWordList[i]);
      if (letter === this.currentWordList[i]) {
        this.revealedLetters[i] = true;
      }
    }
    console.log(this.revealedLetters);
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
