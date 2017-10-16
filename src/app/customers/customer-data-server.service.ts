import {Customer} from './customer';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerDataServerService {

  customersList:Array<Customer>;  
  
  constructor(
    private http:HttpClient
  ) { }

  loadCustomers(){
    this.http.get("http://localhost:1814/customer/GetAllCustomers")
    .subscribe(data => {
      this.customersList = data as Array<Customer>;
    });
  }

  saveCustomer(newCustomer:Customer){
    let queryString = `?name=${newCustomer.name}&stratum=${newCustomer.stratum}&address=${newCustomer.address}&gender=${newCustomer.gender}`;
    this.http.get("http://localhost:1814/customer/SaveCustomer" + queryString)
    .subscribe(data => {
      this.loadCustomers();
    });
  }
  
}
