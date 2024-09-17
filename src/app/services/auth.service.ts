import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedUser : string = "";

  constructor() { }

  setLoggedUser(value: string) {
    this.loggedUser = value;
  }

  getLoggedUser() {
    return this.loggedUser;
  }
}
