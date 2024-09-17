import { Injectable } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public loggedUser: string = '';

  constructor(private auth: Auth) {}

  setLoggedUser(value: string) {
    this.loggedUser = value;
  }

  getLoggedUser() {
    return this.loggedUser;
  }

  logOut() {
    this.loggedUser = '';
    this.closeSession();
  }

  closeSession() {
    console.log('Cerrando la sesión de ', this.auth.currentUser?.email);
    signOut(this.auth).then(() => {
      console.log(this.auth.currentUser?.email);
    });
  }

}
