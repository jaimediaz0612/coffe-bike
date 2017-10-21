import { Component, OnInit } from '@angular/core';
import { Bicicleta as Bicicleta} from '../bicicletas';
import { BicicletaDataServerService } from '../bicicleta-data-server.service';
import { BicicletaDataMemoryService } from '../bicicleta-data-memory.service';

@Component({
  selector: 'bicicletas-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public bicicleta: Bicicleta;
  bicicletasList: Array<Bicicleta>;

  tallaList = [
    { value: 1, label: 'XS' },
    { value: 2, label: 'S' },
    { value: 3, label: 'M' },
    { value: 4, label: 'L' },
    { value: 5, label: 'XL' }
  ];

  rinOptionsList = [
    { value: 0, label: '26' },
    { value: 1, label: '27.5' },
    { value: 2, label: '29' }
  ];

  constructor(
    private bicicletasDataService: BicicletaDataServerService
  ) { }

  ngOnInit() {
    this.bicicleta = new Bicicleta();
    //this.bicicletasDataService.loadBicicletas();
    this.bicicletasDataService.loadBicicletas();
  }

  onNewBike() {
    this.bicicleta = new Bicicleta();
  }

  onSaveBIke() {
    this.bicicletasDataService.saveBicicleta(this.bicicleta);
  }
}
