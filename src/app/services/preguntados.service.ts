import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Pregunta } from '../modules/juegos/preguntados/pregunta.interface';


@Injectable({
  providedIn: 'root',
})
export class PreguntadosService {
  http = inject(HttpClient);

  private preguntas: Pregunta[] = [
    {
      pregunta: '¿Cuál de estos países es conocido por su tango?',
      opciones: ['Argentina', 'España', 'Italia', 'Francia'],
      respuestaCorrecta: 'Argentina',
    },
    {
      pregunta:
        '¿Qué país es famoso por su producción de chocolate y relojes de alta calidad?',
      opciones: ['Suiza', 'Bélgica', 'Francia', 'Alemania'],
      respuestaCorrecta: 'Suiza',
    },
    {
      pregunta: '¿En qué país se originó el reggae?',
      opciones: ['Jamaica', 'Cuba', 'República Dominicana', 'Brasil'],
      respuestaCorrecta: 'Jamaica',
    },
    {
      pregunta: '¿Cuál es el país más grande del mundo?',
      opciones: ['Canadá', 'Rusia', 'China', 'Estados Unidos'],
      respuestaCorrecta: 'Rusia',
    },
    {
      pregunta: '¿Cuál de estos países es conocido por sus fjordos?',
      opciones: ['Noruega', 'Suecia', 'Finlandia', 'Dinamarca'],
      respuestaCorrecta: 'Noruega',
    },
    {
      pregunta: '¿Qué país es famoso por sus safaris y la fauna salvaje?',
      opciones: ['Sudáfrica', 'Kenia', 'Tanzania', 'Botsuana'],
      respuestaCorrecta: 'Sudáfrica',
    },
    {
      pregunta: '¿Cuál de estos países es conocido por el origami?',
      opciones: ['Japón', 'China', 'Corea del Sur', 'Vietnam'],
      respuestaCorrecta: 'Japón',
    },
    {
      pregunta: '¿Qué país es famoso por sus castillos y el té de la tarde?',
      opciones: ['Inglaterra', 'Escocia', 'Irlanda', 'Gales'],
      respuestaCorrecta: 'Inglaterra',
    },
    {
      pregunta: '¿En qué país se encuentra la ciudad de Petra?',
      opciones: ['Jordania', 'Egipto', 'Siria', 'Turquía'],
      respuestaCorrecta: 'Jordania',
    },
    {
      pregunta:
        '¿Qué país es conocido como la cuna de la civilización occidental?',
      opciones: ['Grecia', 'Roma', 'Egipto', 'Mesopotamia'],
      respuestaCorrecta: 'Grecia',
    },
    {
      pregunta: '¿Cuál de estos países es famoso por sus vinos y quesos?',
      opciones: ['Francia', 'Italia', 'España', 'Portugal'],
      respuestaCorrecta: 'Francia',
    },
    {
      pregunta: '¿Qué país es el hogar de la famosa ópera de Sydney?',
      opciones: ['Australia', 'Nueva Zelanda', 'Canadá', 'Reino Unido'],
      respuestaCorrecta: 'Australia',
    },
    {
      pregunta: '¿En qué país se encuentra el Monte Everest?',
      opciones: ['Nepal', 'Tibet', 'India', 'Pakistán'],
      respuestaCorrecta: 'Nepal',
    },
    {
      pregunta: '¿Cuál es el país más pequeño del mundo?',
      opciones: ['Mónaco', 'Vaticano', 'San Marino', 'Nauru'],
      respuestaCorrecta: 'Vaticano',
    },
    {
      pregunta: '¿Qué país es famoso por su carnaval y samba?',
      opciones: ['Brasil', 'Argentina', 'Colombia', 'Venezuela'],
      respuestaCorrecta: 'Brasil',
    },
    {
      pregunta: '¿Cuál de estos países es conocido por su cultura de sushi?',
      opciones: ['Japón', 'Corea del Sur', 'Tailandia', 'China'],
      respuestaCorrecta: 'Japón',
    },
    {
      pregunta: '¿Qué país es famoso por sus desiertos y pirámides?',
      opciones: ['Egipto', 'Sudán', 'Arabia Saudita', 'Marruecos'],
      respuestaCorrecta: 'Egipto',
    },
    {
      pregunta: '¿En qué país se celebran las Olimpiadas de Invierno 2026?',
      opciones: ['Italia', 'Canadá', 'Suecia', 'Suiza'],
      respuestaCorrecta: 'Italia',
    },
    {
      pregunta: '¿Cuál de estos países es conocido por su danza del vientre?',
      opciones: ['Egipto', 'Turquía', 'Grecia', 'Argentina'],
      respuestaCorrecta: 'Egipto',
    },
    {
      pregunta: '¿Qué país es famoso por su arquitectura Gaudí?',
      opciones: ['España', 'Francia', 'Italia', 'México'],
      respuestaCorrecta: 'España',
    },
    {
      pregunta: '¿En qué país se encuentran las ruinas de Machu Picchu?',
      opciones: ['Perú', 'Bolivia', 'Chile', 'Ecuador'],
      respuestaCorrecta: 'Perú',
    },
    {
      pregunta:
        '¿Cuál de estos países es conocido por sus festivales de cine en Cannes?',
      opciones: ['Francia', 'Italia', 'Alemania', 'Reino Unido'],
      respuestaCorrecta: 'Francia',
    },
    {
      pregunta: '¿Qué país es famoso por su cultura de los samuráis?',
      opciones: ['Japón', 'China', 'Corea del Sur', 'Tailandia'],
      respuestaCorrecta: 'Japón',
    },
    {
      pregunta: '¿Cuál de estos países es conocido por su queso feta?',
      opciones: ['Grecia', 'Italia', 'Francia', 'Bélgica'],
      respuestaCorrecta: 'Grecia',
    },
    {
      pregunta: '¿Qué país es famoso por su música flamenca?',
      opciones: ['España', 'Portugal', 'Italia', 'Francia'],
      respuestaCorrecta: 'España',
    },
    {
      pregunta: '¿En qué país se encuentra la Torre Eiffel?',
      opciones: ['Francia', 'Italia', 'Bélgica', 'Reino Unido'],
      respuestaCorrecta: 'Francia',
    },
    {
      pregunta:
        '¿Cuál de estos países es conocido por sus paisajes de tulipanes?',
      opciones: ['Países Bajos', 'Bélgica', 'Francia', 'Alemania'],
      respuestaCorrecta: 'Países Bajos',
    },
    {
      pregunta: '¿Qué país es famoso por su producción de caviar?',
      opciones: ['Rusia', 'Irán', 'Francia', 'Estados Unidos'],
      respuestaCorrecta: 'Irán',
    },
    {
      pregunta:
        '¿Cuál de estos países es conocido por sus danzas folclóricas y su música mariachi?',
      opciones: ['México', 'España', 'Colombia', 'Argentina'],
      respuestaCorrecta: 'México',
    },
    {
      pregunta: '¿En qué país se encuentra el Taj Mahal?',
      opciones: ['India', 'Pakistán', 'Bangladesh', 'Nepal'],
      respuestaCorrecta: 'India',
    },
    {
      pregunta: '¿Qué país es famoso por su carnaval de Venecia?',
      opciones: ['Italia', 'Francia', 'España', 'Grecia'],
      respuestaCorrecta: 'Italia',
    },
  ];

  constructor() {}

  getPaises() {
    return this.http.get<any[]>('https://restcountries.com/v3.1/all').pipe(
      map((paises) =>
        paises.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          } else if (a.name.common > b.name.common) {
            return 1;
          } else {
            return 0;
          }
        })
      )
    );
  }
}
