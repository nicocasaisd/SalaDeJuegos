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
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
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

  msjError: string = '';

  constructor(
    private auth: Auth,
    private firestore: Firestore,
    public authService: AuthService,
    private router: Router
  ) {}

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
          // Registramos el login
          this.registerLogin(this.loggedUser);
          console.log('Login exitoso.');
          // Redirigimos a Home
          this.router.navigate(['home']);
        }
      })
      .catch((e) => {
        console.log('Se recibio un error : ', e.code);
        switch (e.code) {
          case 'auth/invalid-email':
            this.msjError = 'Email invalido.';
            break;
          case 'auth/invalid-credential':
            this.msjError = 'La contraseña es incorrecta.';
            break;
          case 'auth/missing-password':
            this.msjError = 'Ingrese una contraseña.';
            break;
          default:
            this.msjError = e.code;
            break;
        }
      });
  }

  registerLogin(userMail: string) {
    let col = collection(this.firestore, 'logins');
    addDoc(col, { fecha: new Date(), user: userMail });
    console.log('Login registrado');
  }

  closeSession() {
    console.log('Cerrando la sesión de ', this.auth.currentUser?.email);
    signOut(this.auth).then(() => {
      this.setGlobalLoggedUser('');
      console.log(this.auth.currentUser?.email);
    });
  }

  autoCompletarUsuario() {
    this.userMail = 'nico@utn.com.ar';
    this.userPass = 'nico666';
  }
}
