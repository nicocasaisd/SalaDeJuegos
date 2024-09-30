import { Component, OnDestroy, OnInit } from '@angular/core';
import { BtnSalirComponent } from '../btn-salir/btn-salir.component';
import { CommonModule } from '@angular/common';
import { JuegosService } from '../../../services/juegos.service';

@Component({
  selector: 'app-wordle',
  standalone: true,
  imports: [BtnSalirComponent, CommonModule],
  templateUrl: './wordle.component.html',
  styleUrl: './wordle.component.css',
})
export class WordleComponent implements OnInit, OnDestroy {
  // Variables
  maxGuesses: number = 6;
  wordLength: number = 5;
  currentGuessIndex: number = 0;
  currentGuess: string = '';
  guesses: string[] = [];
  wordToGuess: string = '';
  letras: string[] = [];
  tiles: { letter: string; state: 'correct' | 'present' | 'absent' | '' }[][] =
    [];

  words: string[] = ['PERRO']; // Add more words as needed

  gameEnded = false;
  gameWon = false;
  // // Map to store the state of each letter
  // letterStates: { [key: string]: 'correct' | 'present' | 'absent' | '' } = {};

  constructor(public juego: JuegosService) {
    this.wordToGuess = this.getRandomWord();
    this.initializeTiles();
    this.initializeAlphabet();
  }

  ngOnInit(): void {
    this.juego.setModuleLoaded(true);
    console.log('Se crea el componente');
  }

  ngOnDestroy(): void {
    this.juego.setModuleLoaded(false);
    console.log('Se destruye el componente');
  }

  // Metodos

  initializeAlphabet() {
    for (let i = 0; i < 26; i++) {
      this.letras.push(String.fromCharCode(97 + i));
    }
  }

  getRandomWord() {
    const index = Math.floor(Math.random() * this.words.length);
    return this.words[index];
  }
  /* 
  initializeTiles() {
    this.tiles = Array(this.maxGuesses).fill(null).map(() =>
      Array(this.wordLength).fill({ letter: '', state: '' })
    );
  } */
  initializeTiles() {
    this.tiles = Array.from({ length: this.maxGuesses }, () =>
      Array.from({ length: this.wordLength }, () => ({ letter: '', state: '' }))
    );
  }

  onLetterInput(letter: string) {
    if (this.currentGuess.length < this.wordLength) {
      this.currentGuess += letter.toUpperCase();

      // Update the corresponding tile in the current row
      const currentTileIndex = this.currentGuess.length - 1;
      this.tiles[this.currentGuessIndex][currentTileIndex].letter =
        letter.toUpperCase();
    }
  }

  onDelete() {
    if (this.currentGuess.length > 0) {
      const currentTileIndex = this.currentGuess.length - 1;

      // Remove the last letter from the current guess
      this.currentGuess = this.currentGuess.slice(0, -1);

      // Clear the letter in the corresponding tile
      this.tiles[this.currentGuessIndex][currentTileIndex].letter = '';
    }
  }

  onSubmitGuess() {
    console.log(this.currentGuess);
    if (this.currentGuess.length === this.wordLength) {
      this.checkGuess();
      this.currentGuessIndex++;
      this.checkIfGameEnded();
      this.currentGuess = ''; // Reset current guess for the next row
    }
  }

  checkIfGameEnded() {
    // Revisamos si termino el juego
    if (this.currentGuessIndex >= this.maxGuesses) {
      this.gameEnded = true;
    } else if (this.currentGuess === this.wordToGuess) {
      this.gameEnded = true;
      this.gameWon = true;
    }
  }

  checkGuess() {
    for (let i = 0; i < this.wordLength; i++) {
      const letter = this.currentGuess[i];
      if (letter === this.wordToGuess[i]) {
        this.tiles[this.currentGuessIndex][i] = { letter, state: 'correct' };
        //this.updateLetterState(letter, 'correct');
      } else if (this.wordToGuess.includes(letter)) {
        this.tiles[this.currentGuessIndex][i] = { letter, state: 'present' };
        //this.updateLetterState(letter, 'present');
      } else {
        this.tiles[this.currentGuessIndex][i] = { letter, state: 'absent' };
        //this.updateLetterState(letter, 'absent');
      }
    }
    this.guesses.push(this.currentGuess);
  }

  // // Function to update the state of each letter based on the current guess
  // updateLetterState(letter: string, state: 'correct' | 'present' | 'absent') {
  //   const currentState = this.letterStates[letter];

  //   // Update the letter state only if the new state is "better"
  //   if (
  //     currentState === '' ||
  //     (currentState === 'present' && state === 'correct') ||
  //     currentState === 'absent'
  //   ) {
  //     //  this.letterStates = { ...this.letterStates, [letter]: state };  // Trigger change detection by updating the object reference
  //     this.letterStates[letter] = state;
  //   }
  // }

  isGameOver() {
    return (
      this.currentGuessIndex >= this.maxGuesses ||
      this.guesses.includes(this.wordToGuess)
    );
  }

  resetGame() {
    throw new Error('Method not implemented.');
  }
  goHome() {
    throw new Error('Method not implemented.');
  }
}
