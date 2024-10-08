import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css'
})
export class EncuestaComponent implements OnInit{

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({

      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      edad: new FormControl('', [Validators.required, Validators.min(18), Validators.max(99)]),
      nro_telefono: new FormControl('', Validators.required),
      question1: new FormControl('', [Validators.required]), // For radiobuttons
      question2: new FormControl('', [Validators.required]), // For textbox
      question3: new FormControl('', [Validators.required])  // For checkbox

    }
    );
  }

  get usuario() {
    return this.form.get('usuario');
  }
  get nombre() {
    return this.form.get('nombre');
  }
  get edad() {
    return this.form.get('edad');
  }
  get mail() {
    return this.form.get('mail');
  }
  get clave() {
    return this.form.get('clave');
  }
  get repiteClave() {
    return this.form.get('repiteClave');
  }

  enviarForm() {
    console.log(this.form.value);
    
  }
}
