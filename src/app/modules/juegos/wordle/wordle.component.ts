import { Component } from '@angular/core';
import { BtnSalirComponent } from '../btn-salir/btn-salir.component';
import { CommonModule } from '@angular/common';
import { JuegosService } from '../../../services/juegos.service';

@Component({
  selector: 'app-wordle',
  standalone: true,
  imports: [BtnSalirComponent, CommonModule],
  templateUrl: './wordle.component.html',
  styleUrl: './wordle.component.css'
})
export class WordleComponent {
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
