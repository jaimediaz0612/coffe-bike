import { Comida as Comida } from './comidas';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ComidaDataServerService {

  comidasList: Array<Comida>;

  constructor(
    private http: HttpClient
  ) { }

  loadComidas() {
    this.http.get('http://localhost:8080/bike/webresources/com.bike.entidades.menu')
      .subscribe(data => {
        this.comidasList = data as Array<Comida>;
      });
  }

  saveComida(newComida: Comida) {
    // tslint:disable-next-line:max-line-length
    const queryString = `{"cantidad":"${newComida.cantidad}","producto":"${newComida.producto}","tipo":"${newComida.tipo}","valor":"${newComida.valor}"}`;
    console.log(queryString);

    this.http.post('http://localhost:8080/bike/webresources/com.bike.entidades.menu',
    queryString, {headers: new HttpHeaders().set('content-type','application/json')},
  )
      .subscribe(data => {
        this.loadComidas();
      });
  }
}