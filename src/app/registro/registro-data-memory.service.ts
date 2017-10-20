import { Injectable } from '@angular/core';
import { Registro } from './registro';

@Injectable()
export class RegistroDataMemoryService {

  registroList: Array<Registro>;

  constructor() { }
   
  private initializeRegistroList() {
    this.registroList = [
      {
        name: 'jaime',
        correo: 'jaime@gmail.com',
        telefono: 8881186,
        ciclista: 1
      },
    ];
  }

  loadRegistro() {
    this.initializeRegistroList();
  }

  saveRegistro(newRegistro: Registro) {
    this.registroList.push(newRegistro);
  }

}

