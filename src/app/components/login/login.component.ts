import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
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
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginsCollection: any[] = [];
  public user: string = '';
  countLogins: number = 0;
  private sub!: Subscription;

  /* constructor(private firestore: Firestore) {}

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
  } */

  // Login With Auth

  

  userMail: string = '';
  userPass: string = '';

  loggedUser: string = '';

  constructor(public auth: Auth, public authService: AuthService) {}

  setGlobalLoggedUser(loggedUser: string) {
    this.authService.setLoggedUser(loggedUser);
  }

  getGlobalLoggedUser() {
    console.log(this.authService.getLoggedUser());
  }

  login() {
    console.log('Inside login...');
    console.log(this.userMail, ': ', this.userPass);
    signInWithEmailAndPassword(this.auth, this.userMail, this.userPass)
      .then((res) => {
        if (res.user.email !== null) {
          this.loggedUser = res.user.email;
          this.setGlobalLoggedUser(this.loggedUser);
        }
        console.log('Login exitoso.');
      })
      .catch((e) => console.log('Se recibio un error : ', e.code));
  }

  CloseSession() {
    signOut(this.auth).then(() => {
      console.log(this.auth.currentUser?.email);
    });
  }
}
