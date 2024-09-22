import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JuegosService } from '../../../services/juegos.service';

@Component({
  selector: 'app-btn-salir',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './btn-salir.component.html',
  styleUrl: './btn-salir.component.css',
})
export class BtnSalirComponent {
  
  constructor(private router : Router, private juegosService : JuegosService){}
  
  salir() {
    this.router.navigate(['/home']);
  }
}
