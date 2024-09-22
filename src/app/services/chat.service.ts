import { Injectable } from '@angular/core';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { addDoc, collection, collectionData, Firestore, Timestamp } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface ChatMessage{
  message: string;
  sender: string;
  timestamp: Timestamp;
}

@Injectable({
  providedIn: 'root'
})


export class ChatService {

  constructor(private firestore : Firestore) { }

  // Obtener mensajes
  getMessages() : Observable<ChatMessage[]>{
    const messages =  collection(this.firestore, 'mensajes');
    
    return collectionData(messages, {idFIeld: 'id'}) as Observable<ChatMessage[]>;
  }

  // Enviar mensajes
  sendMessage(message: string, sender: string) : Promise<void> {
    const messages = collection(this.firestore, 'mensajes');

    return addDoc(messages, {
      message,
      sender,
      timestamp: Timestamp.now(),
      date: Date.now()
    }).then(() => {
      console.log("Message sent successfully");
    }).catch((error) => {
      console.error("Error sending message: ", error);
    });

  }

}
