import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"tp-juego","appId":"1:1028510518303:web:7c67bc397ade524ccbd92a","databaseURL":"https://tp-juego-default-rtdb.firebaseio.com","storageBucket":"tp-juego.appspot.com","apiKey":"AIzaSyBU8hYJvc5VsT9mrKqv5XaFm1NP5qzD6X4","authDomain":"tp-juego.firebaseapp.com","messagingSenderId":"1028510518303"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
