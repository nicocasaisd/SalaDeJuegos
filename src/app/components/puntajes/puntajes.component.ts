import { Component, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-puntajes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './puntajes.component.html',
  styleUrl: './puntajes.component.css'
})
export class PuntajesComponent implements OnInit{


  constructor(public juego: JuegosService) {}

  listaDePuntajes : any[] = [];
  juegoSeleccionado : string = "";

  ngOnInit(): void {
    this.juego.getPuntajes();
  }
}
