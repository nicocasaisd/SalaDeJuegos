import { Component, OnDestroy, OnInit } from '@angular/core';
import { BtnSalirComponent } from '../btn-salir/btn-salir.component';
import { JuegosService } from '../../../services/juegos.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [BtnSalirComponent, CommonModule],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css',
})
export class PreguntadosComponent implements OnInit, OnDestroy {
  constructor(public juego: JuegosService, public router: Router) {}

  goHome() {
    this.router.navigate(['/home']); // Assuming you have a home route set up
  }

  showModal() {
    // const modal = document.getElementById('exampleModal') as Htm;
    // if(modal){
    //   modal.showPopover();
    // }
    this.gameEnded = true;
    console.log(this.gameEnded);
  }

  gameEnded = false;

  ngOnInit(): void {
    this.juego.setModuleLoaded(true);
    console.log('Se crea el componente');
  }

  ngOnDestroy(): void {
    this.juego.setModuleLoaded(false);
    console.log('Se destruye el componente');
  }
}
