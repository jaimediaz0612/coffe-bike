import { Bicicleta } from './bicicletas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BicicletaDataServerService {

  bicicletasList: Array<Bicicleta>;

  constructor(
    private http: HttpClient
  ) { }

  loadBicicletas() {
    this.http.get('')
      .subscribe(data => {
        this.bicicletasList = data as Array<Bicicleta>;
      });
  }

  saveBicicleta(newBicicleta: Bicicleta) {
    // tslint:disable-next-line:max-line-length
    const queryString = ``;
    this.http.get('' + queryString)
      .subscribe(data => {
        this.loadBicicletas();
      });
  }

}
