import { Bicicleta } from './bicicletas';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class BicicletaDataServerService {

  bicicletasList: Array<Bicicleta>;

  constructor(
    private http: HttpClient
  ) { }

  loadBicicletas() {
    this.http.get('http://localhost:8080/bike/webresources/com.bike.entidades.bicicleta')
      .subscribe(data => {
        this.bicicletasList = data as Array<Bicicleta>;
      });
  }

  saveBicicleta(newBicicleta: Bicicleta) {
    // tslint:disable-next-line:max-line-length
    const queryString =  `{"tipo":"${newBicicleta.tipo}","color":"${newBicicleta.color}","talla":"${newBicicleta.talla}","rin":"${newBicicleta.rin}","cambios":"${newBicicleta.cambios}"}`;
    console.log(queryString);

    this.http.post('http://localhost:8080/bike/webresources/com.bike.entidades.bicicleta',
    queryString, {headers: new HttpHeaders().set('content-type','application/json')},
  )
      .subscribe(data => {
        this.loadBicicletas();
      });
  }
}
