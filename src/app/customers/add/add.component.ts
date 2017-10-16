import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";

import { CustomerDataServerService } from '../customer-data-server.service';

@Component({
  selector: 'customers-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public customer:Customer;

  stratumList = [
    { value:1, label:"One" },
    { value:2, label:"Two" },
    { value:3, label:"Three" },
    { value:4, label:"Four" },
    { value:5, label:"Five" },
    { value:6, label:"Six" },
  ];

  genderOptionsList = [
    { value:0, label:"Female" },
    { value:1, label:"Male" },
  ];

  constructor(
    private customerDataService:CustomerDataServerService
  ) { }

  ngOnInit() {
    this.customer = new Customer();    
  }

  onNewCustomer(){
    this.customer = new Customer();    
  }

  onSaveCustomer(){
    this.customerDataService.saveCustomer(this.customer);
  }
}
