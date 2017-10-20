import { Comida as Comida } from './comidas';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComidaDataServerService {

  comidasList: Array<Comida>;

  constructor(
    private http: HttpClient
  ) { }

  loadComidas() {
    this.http.get('')
      .subscribe(data => {
        this.comidasList = data as Array<Comida>;
      });
  }

  saveComida(newComida: Comida) {
    // tslint:disable-next-line:max-line-length
    const queryString = ``;
    this.http.get('' + queryString)
      .subscribe(data => {
        this.loadComidas();
      });
  }
}
