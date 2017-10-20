import { Component, OnInit } from '@angular/core';
import { ComidaDataServerService } from '../comida-data-server.service';

@Component({
  selector: 'comidas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tipoOptions = ['Bebida', 'Comidas'];

  constructor(
    private comidaDataService: ComidaDataServerService
  ) { }

  ngOnInit() {
    this.comidaDataService.loadComidas();
  }

}
