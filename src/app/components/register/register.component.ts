import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private auth: Auth,
    private firestore: Firestore,
    public authService: AuthService,
    private router: Router
  ) {}

  newUserMail: string = '';
  newUserPass: string = '';

  loggedUser: string = '';

  msjError: string = '';

  setGlobalLoggedUser(loggedUser: string) {
    this.authService.setLoggedUser(loggedUser);
  }

  getGlobalLoggedUser() {
    console.log(this.authService.getLoggedUser());
  }

  register() {
    this.msjError = '';
    createUserWithEmailAndPassword(
      this.auth,
      this.newUserMail,
      this.newUserPass
    )
      .then((res) => {
        if (res.user.email !== null) {
          this.loggedUser = res.user.email;
          this.setGlobalLoggedUser(this.loggedUser);
          // Redirigimos a Home
          this.router.navigate(['home']);
        }
      })
      .catch((e) => {
        console.log('Se recibio un error : ', e.code);
        switch (e.code) {
          case 'auth/invalid-email':
            this.msjError = 'El email ingresado es invalido.';
            break;
          case 'auth/email-already-in-use':
            this.msjError = 'El email ingresado ya se encuentra en uso.';
            break;
          case 'auth/weak-password':
            this.msjError = 'Contraseña demasiado débil. Ingrese al menos 6 caracteres.';
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
}
