import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path: '**', component: ErrorComponent},

];
