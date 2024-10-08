import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { addDoc, collection, Timestamp } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore/lite';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EncuestaService} from '../../services/encuesta.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css'
})
export class EncuestaComponent implements OnInit{

  form!: FormGroup;
  options = ['Vista', 'Jugabilidad', 'UI/UX']; 

  constructor(private encuestaService : EncuestaService, private authService : AuthService){}

  ngOnInit(): void {
    this.form = new FormGroup({

      nombre: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      apellido: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      edad: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99)]),
      nro_telefono: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(10)]),
      pregunta1: new FormControl('', [Validators.required]), // radiobuttons
      pregunta2: new FormControl('', [Validators.required]), // textbox
      pregunta3: new FormArray([], Validators.required)  // checkbox

    }
    );
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.options.forEach(() => this.pregunta3.push(new FormControl(false)));
  }

  

  get nombre() {
    return this.form.get('nombre');
  }
  get apellido() {
    return this.form.get('apellido');
  }
  get edad() {
    return this.form.get('edad');
  }
  get nro_telefono() {
    return this.form.get('nro_telefono');
  }
  get pregunta1() {
    return this.form.get('pregunta1');
  }
  get pregunta2() {
    return this.form.get('pregunta2');
  }
  get pregunta3() {
    return this.form.get('pregunta3') as FormArray;
  }


  enviarForm() {
    console.log(this.form.value);
    if (this.form.valid) {
      const opcionesSeleccionadas = this.form.value.pregunta3
        .map((checked: boolean, i: number) => checked ? this.options[i] : null)
        .filter((v: string | null) => v !== null);
      console.log('Formulario enviado correctamente', { ...this.form.value, opcionesSeleccionadas });
      this.encuestaService.sendEncuesta(this.form.value, opcionesSeleccionadas, this.authService.getLoggedUser())
    } else {
      console.log('El formulario es invalido');
    }
  }

  
}
