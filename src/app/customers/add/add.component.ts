import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerDataServerService } from '../customer-data-server.service';
import { CustomerDataMemoryService } from '../customer-data-memory.service';

@Component({
  selector: 'customers-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public customer: Customer;

  customersList: Array<Customer>;

  stratumList = [
    { value: 1, label: 'One' },
    { value: 2, label: 'Two' },
    { value: 3, label: 'Three' },
    { value: 4, label: 'Four' },
    { value: 5, label: 'Five' },
    { value: 6, label: 'Six' },
  ];

  genderOptionsList = [
    { value: 0, label: 'Masculino' },
    { value: 1, label: 'Femenino' },
  ];

  constructor(
    private customerDataService: CustomerDataServerService
  ) { }

  ngOnInit() {
    this.customer = new Customer();
    //this.customerDataService.loadCustomers();
    this.customerDataService.loadCustomers();
  }

  onNewCustomer() {
    this.customer = new Customer();
  }

  onSaveCustomer() {
    this.customerDataService.saveCustomer(this.customer);
  }
}
