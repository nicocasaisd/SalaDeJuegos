import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Injector } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pregunta } from '../modules/juegos/preguntados/pregunta.interface';

@Injectable({
  providedIn: 'root',
})
export class PreguntadosService {
  constructor() {}

  http = inject(HttpClient);

  private preguntas: Pregunta[] = [
    {
      name: 'spotify',
      opciones: ['Spotify', 'Apple', 'YouTube'],
      respuestaCorrecta: 'Spotify',
    },
    {
      name: 'adobe',
      opciones: ['Adobe', 'Apple', 'Airbnb'],
      respuestaCorrecta: 'Adobe',
    },
    {
      name: 'airbnb',
      opciones: ['Airbnb', 'Abstract', 'Android'],
      respuestaCorrecta: 'Airbnb',
    },
    {
      name: 'discord',
      opciones: ['Discord', 'Docker', 'Android'],
      respuestaCorrecta: 'Discord',
    },
    {
      name: 'netflix',
      opciones: ['Nico', 'Netflix', 'Notion'],
      respuestaCorrecta: 'Netflix',
    },
  ];


  // getPaisByName(name: string) {
  //   return this.http.get('https://restcountries.com/v3.1/name/' + name);
  // }


  // // Prueba con Contornos de Paises
  // private apiUrl = 'https://pokeapi.co/api/v2/pokemon/4';

  // getPokemon(){
    
  //   return this.http.get<any>(this.apiUrl);
  // }

  // getRandomPokemon(){
  //   const index = Math.floor(Math.random() * 99 +1);
  //   return this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+index);
  // }

  getLogotypes(){
    return this.http.get<any>('https://logotypes.dev/all');
  }

  getLogotypeByName(name: string){
    return this.http.get<any>('https://logotypes.dev/'+name+'/data');
  }

  getRandomPregunta(){
    const index = Math.floor(Math.random() * this.preguntas.length);
    return this.preguntas[index];
  }

  getPreguntas(){
    return this.preguntas;
  }

}
