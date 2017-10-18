import { Component, OnInit } from '@angular/core';
import { Bicicletas } from "../bicicletas";
//import { CustomerDataServerService } from '../customer-data-server.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    
  rinOptions = ["26", "27.5", "29"];
  
    constructor(
      //private customerDataService:CustomerDataServerService
    ) { }
  
    ngOnInit() {
      //this.customerDataService.loadCustomers();
    }
  
  }
  