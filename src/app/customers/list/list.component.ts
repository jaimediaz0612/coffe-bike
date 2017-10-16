import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";
import { CustomerDataServerService } from '../customer-data-server.service';


@Component({
  selector: 'customers-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    
  genderOptions = ["Female", "Male"];

  constructor(
    private customerDataService:CustomerDataServerService
  ) { }

  ngOnInit() {
    this.customerDataService.loadCustomers();
  }

}
