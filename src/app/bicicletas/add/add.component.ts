import { Component, OnInit } from '@angular/core';
import { Bicicletas } from "../bicicletas";

//import { CustomerDataServerService } from '../customer-data-server.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public bicicletas:Bicicletas;

  tallaList = [
    { value:1, label:"XS" },
    { value:2, label:"S" },
    { value:3, label:"M" },
    { value:4, label:"L" },
    { value:5, label:"XL" },
  ];

  rinOptionsList = [
    { value:0, label:"26" },
    { value:1, label:"27.5" },
    { value:1, label:"29" },
  ];

  constructor(
    //private customerDataService:CustomerDataServerService
  ) { }

  ngOnInit() {
    this.bicicletas = new Bicicletas();
    //this.customerDataService.loadCustomers();    
  }

  onNewCustomer(){
    this.bicicletas = new Bicicletas();    
  }

  onSaveCustomer(){
    ///this.customerDataService.saveCustomer(this.customer);
  }
}
