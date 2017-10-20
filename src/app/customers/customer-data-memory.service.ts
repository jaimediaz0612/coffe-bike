import { Customer } from './customer';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomerDataMemoryService {

  customersList: Array<Customer>;

  constructor() { }

  private initializeCustomerList() {
    this.customersList = [
      {
        name: 'Jaime',
        address: 'guamal',
        gender: 1,
        stratum: 1
      },
      {
        name: 'María jose',
        address: 'guamal',
        gender: 0,
        stratum: 4
      },
      {
        name: 'Alexandra',
        address: 'guamal',
        gender: 1,
        stratum: 1
      },
      {
        name: 'Joaquin',
        address: 'Villamaría',
        gender: 1,
        stratum: 5
      },
    ];
  }

  loadCustomers() {
    this.initializeCustomerList();
  }

  saveCustomer(newCustomer: Customer) {
    this.customersList.push(newCustomer);
  }

}
