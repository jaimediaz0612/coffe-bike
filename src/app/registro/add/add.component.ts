import { Component, OnInit } from '@angular/core';
import { Registro } from "../registro";

//import { CustomerDataServerService } from '../customer-data-server.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public customer:Registro;
  
    ciclistaOptionsList = [
      { value:0, label:"SI" },
      { value:1, label:"NO" },
    ];
  
    constructor(
      //private customerDataService:CustomerDataServerService
    ) { }
  
    ngOnInit() {
      this.registro = new Registro();
      //this.customerDataService.loadCustomers();    
    }
  
    onNewCustomer(){
      this.customer = new Registro();    
    }
  
    onSaveCustomer(){
      //this.customerDataService.saveCustomer(this.customer);
    }
  }
  