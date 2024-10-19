import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatComponent } from './components/chat/chat.component';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'chat', component: ChatComponent, canActivate: [authGuard]},
    {path:'encuesta', component: EncuestaComponent, canActivate: [authGuard]},
    {path:'puntajes', loadComponent: ()=> import('./components/puntajes/puntajes.component').then(c => c.PuntajesComponent)},
    {path:'juegos', loadChildren: ()=> import('./modules/juegos/juegos.module').then(m => m.JuegosModule), canActivate: [authGuard]},
    {path: '**', component: ErrorComponent},

];
