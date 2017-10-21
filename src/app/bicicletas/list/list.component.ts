import { Component, OnInit } from '@angular/core';
import { Bicicleta } from '../bicicletas';
import { BicicletaDataServerService } from '../bicicleta-data-server.service';
import { BicicletaDataMemoryService } from '../bicicleta-data-memory.service';

@Component({
  selector: 'bicicletas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  rinOptions = ['26', '27.5', '29'];

  constructor(
    private bicicletasDataService: BicicletaDataServerService
  ) { }

  ngOnInit() {
    this.bicicletasDataService.loadBicicletas();
  }

}
