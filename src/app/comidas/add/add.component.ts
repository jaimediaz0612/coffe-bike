import { Component, OnInit } from '@angular/core';
import { Comida as Comida } from '../comidas';
import { ComidaDataServerService } from '../comida-data-server.service';

@Component({
  selector: 'comidas-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public comida: Comida;

  cantidadList = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
    { value: 4, label: 'Four' },
    { value: 5, label: 'Five' },
    { value: 6, label: 'Six' },
  ];

  tipoOptionsList = [
    { value: 0, label: 'Bebida' },
    { value: 1, label: 'comidas' },
  ];

  constructor(
    private comidasDataService: ComidaDataServerService
  ) { }

  ngOnInit() {
    this.comida = new Comida();
    this.comidasDataService.loadComidas();
  }

  onNewCustomer() {
    this.comida = new Comida();
  }

  onSaveCustomer() {
    this.comidasDataService.saveComida(this.comida);
  }
}
