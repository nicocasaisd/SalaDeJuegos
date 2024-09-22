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

export interface ChatMessage {
  message: string;
  sender: string;
  timestamp: Timestamp;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private firestore: Firestore) {}

  // Obtener mensajes
  getMessages(): Observable<ChatMessage[]> {
    const messages = collection(this.firestore, 'mensajes');

    return collectionData(messages, { idFIeld: 'id' }).pipe(
      map((messages : ChatMessage[]) =>
        messages.sort((a, b) => {
          if (a.timestamp < b.timestamp) {
            return -1;
          } else if (a.timestamp > b.timestamp) {
            return 1;
          } else {
            return 0;
          }
        })
      )
    ); //as Observable<ChatMessage[]>;
  }

  // Enviar mensajes
  sendMessage(message: string, sender: string): Promise<void> {
    const messages = collection(this.firestore, 'mensajes');

    return addDoc(messages, {
      message,
      sender,
      timestamp: Timestamp.now(),
      date: Date.now(),
    })
      .then(() => {
        console.log('Message sent successfully');
      })
      .catch((error) => {
        console.error('Error sending message: ', error);
      });
  }
}
