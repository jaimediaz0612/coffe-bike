import { Injectable } from '@angular/core';
import { Comida } from './comidas';

@Injectable()
export class ComidaDataMemoryService {

  comidasList: Array<Comida>;

  constructor() { }
  private initializeComidasList() {
    this.comidasList = [
      {
        producto: 'panceroti',
        tipo: 1,
        cantidad: 2,
        valor: 4000,
      },
    ];
  }

  loadComidas() {
    this.initializeComidasList();
  }

  saveComidas(newComida: Comida) {
    this.comidasList.push(newComida);
  }

}
