import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
  Timestamp,
} from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';

export interface Encuesta {
  message: string;
  sender: string;
  timestamp: Timestamp;
}

@Injectable({
  providedIn: 'root',
})
export class EncuestaService {
  constructor(private firestore: Firestore) {}

  // Obtener mensajes
  // getMessages(): Observable<ChatMessage[]> {
  //   const messages = collection(this.firestore, 'mensajes');

  //   return collectionData(messages, { idFIeld: 'id' }).pipe(
  //     map((messages : ChatMessage[]) =>
  //       messages.sort((a, b) => {
  //         if (a.timestamp < b.timestamp) {
  //           return -1;
  //         } else if (a.timestamp > b.timestamp) {
  //           return 1;
  //         } else {
  //           return 0;
  //         }
  //       })
  //     )
  //   ); //as Observable<ChatMessage[]>;
  // }

  // Enviar mensajes
  sendEncuesta(encuesta: any, opcionesPregunta3 : string[], sender: string): Promise<void> {
    const encuestas = collection(this.firestore, 'encuestas');

    return addDoc(encuestas, {
      encuesta,
      opcionesPregunta3,
      sender,
      fecha: Timestamp.now(),
    })
      .then(() => {
        console.log('Encuesta sent successfully');
      })
      .catch((error) => {
        console.error('Error sending message: ', error);
      });
  }
}
