import { Component, OnInit } from '@angular/core';
import { Comida } from '../comidas';
import { ComidaDataServerService } from '../comida-data-server.service';
import { ComidaDataMemoryService } from '../comida-data-memory.service'

@Component({
  selector: 'comidas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  tipoOptions = ['Bebida', 'Comidas'];

  constructor(
    private comidaDataService: ComidaDataMemoryService
  ) { }

  ngOnInit() {
    this.comidaDataService.loadComidas();
  }

}
