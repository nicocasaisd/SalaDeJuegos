import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  private isModuleLoaded = false;
  
  constructor() { }

  setModuleLoaded(status: boolean) {
    this.isModuleLoaded = status;
  }

  getModuleLoaded(): boolean {
    return this.isModuleLoaded;
  }
}
