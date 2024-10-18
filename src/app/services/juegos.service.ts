import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, Timestamp } from '@angular/fire/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class JuegosService {
  private isModuleLoaded = false;

  constructor(private firestore : Firestore, private auth : AuthService) {}

  setModuleLoaded(status: boolean) {
    this.isModuleLoaded = status;
  }

  getModuleLoaded(): boolean {
    return this.isModuleLoaded;
  }

  // Guardar Puntaje
  sendPuntaje(userScore : number, nombreDeJuego : string) : Promise<void> {
    const puntajes = collection(this.firestore, 'puntajes');

    return addDoc(puntajes, {
      loggedUser : this.auth.loggedUser,
      nombreDeJuego,
      userScore,
      fecha: Timestamp.now(),
    })
    .then(()=>{
      console.log('Puntaje enviado correctamente.');
    })
    .catch(()=>{
      console.error('Error sending message: ');
    })

  }
}
