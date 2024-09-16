import { Component } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  setDoc,
  DocumentData,
  doc,
  addDoc,
  query,
} from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginsCollection: any[] = [];
  public user: string = '';
  countLogins: number = 0;
  private sub!: Subscription;

  constructor(private firestore: Firestore) {}

  login() {
    let col = collection(this.firestore, 'logins');

    addDoc(col, { fecha: new Date(), user: this.user });

    console.log('Login creado.');
  }

  getData() {
    let col = collection(this.firestore, 'logins');

    console.log(col);
    //const filteredQuery = query(col);

    //const observable = collectionData(filteredQuery);
    const observable = collectionData(col);
    
    this.sub = observable.subscribe((respuesta: any) => {
      this.loginsCollection = respuesta;

      this.countLogins = this.loginsCollection.length;

      console.log(respuesta);
    });
  }
}
