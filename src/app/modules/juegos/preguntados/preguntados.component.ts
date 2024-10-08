import { Component, OnDestroy, OnInit } from '@angular/core';
import { BtnSalirComponent } from '../btn-salir/btn-salir.component';
import { JuegosService } from '../../../services/juegos.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PreguntadosService } from '../../../services/preguntados.service';
import { Pregunta } from './pregunta.interface';
import { user } from '@angular/fire/auth';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [BtnSalirComponent, CommonModule],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css',
})
export class PreguntadosComponent implements OnInit, OnDestroy {
  gameEnded = false;
  gameWon = false;

  currentLogotype: any;
  nextLogotype: any;

  currentPregunta!: Pregunta;
  nextPregunta!: Pregunta;

  preguntas!: Pregunta[];
  userScore: number = 0;

  constructor(
    public juego: JuegosService,
    public router: Router,
    public preguntadosService: PreguntadosService
  ) {}

  goHome() {
    this.router.navigate(['/home']);
  }

  resetGame() {
    this.currentLogotype = null;
    this.preguntas = this.preguntadosService.getPreguntas();
    this.loadFirstPregunta();
    this.userScore = 0;
    this.gameEnded = false;
    this.gameWon = false;
  }

  ngOnInit(): void {
    this.juego.setModuleLoaded(true);
    console.log('Se crea el componente');

    this.preguntas = this.preguntadosService.getPreguntas();
    this.loadFirstPregunta();
  }

  ngOnDestroy(): void {
    this.juego.setModuleLoaded(false);
    console.log('Se destruye el componente');
  }

  getRandomPregunta() {
    const index = Math.floor(Math.random() * this.preguntas.length);

    return this.preguntas.splice(index, 1)[0];
  }

  loadFirstPregunta() {
    if (this.preguntas.length > 0) {
      this.currentPregunta = this.getRandomPregunta();
      if (this.currentPregunta) {
        this.preguntadosService
          .getLogotypeByName(this.currentPregunta.name)
          .subscribe((data) => {
            console.log(data[0]);
            this.currentLogotype = data[0];
          });
      }
    }
  }

  loadNextPregunta() {
    if (this.preguntas.length > 0) {
      this.nextPregunta = this.getRandomPregunta();
      if (this.nextPregunta) {
        this.preguntadosService
          .getLogotypeByName(this.nextPregunta.name)
          .subscribe((data) => {
            console.log(data[0]);
            this.nextLogotype = data[0];
          });
      }
    } else {
      this.gameWon = true;
      this.gameEnded = true;
    }
  }

  enviarRespuesta(respuesta: string) {
    const boton = document.getElementById(respuesta);

    if (
      this.currentPregunta &&
      this.currentPregunta.respuestaCorrecta === respuesta
    ) {
      if (boton) {
        boton.classList.add('btn-win');
      }
      this.userScore++;
      this.loadNextPregunta();
      setTimeout(() => {
        this.currentPregunta = this.nextPregunta;
        this.currentLogotype = this.nextLogotype;
      }, 1000);
    } else {
      if (boton) {
        boton.classList.add('btn-loose');
      }
      setTimeout(()=> this.gameEnded = true, 1000);
      
    }
  }
}
