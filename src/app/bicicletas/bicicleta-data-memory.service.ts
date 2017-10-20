import { Bicicleta } from './bicicletas';
import { Injectable } from '@angular/core';

@Injectable()
export class BicicletaDataMemoryService {

  bicicletasList: Array<Bicicleta>;

  constructor() { }

  private initializeBicicletasList() {
    this.bicicletasList = [
      {
        bi_codigo: '1',
        cambios: 18,
        color: 'naranja',
        rin: 29,
        talla: 3,
        tipo: 'MTB'
      }
    ];
  }

  loadBicicletas() {
    this.initializeBicicletasList();
  }

  saveBicicleta(newBicicleta: Bicicleta) {
    this.bicicletasList.push(newBicicleta);
  }

}
