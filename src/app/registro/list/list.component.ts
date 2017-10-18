import { Component, OnInit } from '@angular/core';
import { Registro } from "../registro";
//import { CustomerDataServerService } from '../customer-data-server.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    
  ciclistaOptions = ["SI", "NO"];
  
    constructor(
      //private customerDataService:CustomerDataServerService
    ) { }
  
    ngOnInit() {
      //this.customerDataService.loadCustomers();
    }
  
  }
  