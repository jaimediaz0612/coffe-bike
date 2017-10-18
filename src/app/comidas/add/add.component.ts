import { Component, OnInit } from '@angular/core';
import { Comidas } from "../comidas";

//import { CustomerDataServerService } from '../customer-data-server.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public comidas:Comidas;
  
    cantidadList = [
      { value:1, label:"One" },
      { value:2, label:"Two" },
      { value:3, label:"Three" },
      { value:4, label:"Four" },
      { value:5, label:"Five" },
      { value:6, label:"Six" },
    ];
  
    tipoOptionsList = [
      { value:0, label:"Bebida" },
      { value:1, label:"comidas" },
    ];
  
    constructor(
      //private customerDataService:CustomerDataServerService
    ) { }
  
    ngOnInit() {
      this.comidas = new Comidas();
      //this.customerDataService.loadCustomers();    
    }
  
    onNewCustomer(){
      this.comidas = new Comidas();    
    }
  
    onSaveCustomer(){
      //this.customerDataService.saveCustomer(this.customer);
    }
  }
  