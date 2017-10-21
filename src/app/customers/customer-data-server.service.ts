import { Customer } from './customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CustomerDataServerService {

  customersList: Array<Customer>;

  
  constructor(
    private http: HttpClient
  ) { }

  loadCustomers() {
    this.http.get('http://localhost:8080/bike/webresources/com.bike.entidades.customer')
      .subscribe(data => {
        this.customersList = data as Array<Customer>;
      });
  }

  saveCustomer(newCustomer: Customer) {
    // tslint:disable-next-line:max-line-length
    const queryString = `{"name":"${newCustomer.name}","stratum":"${newCustomer.stratum}","address":"${newCustomer.address}","gender":"${newCustomer.gender}"}`;
    console.log(queryString);
    
   

    this.http.post('http://localhost:8080/bike/webresources/com.bike.entidades.customer',
    queryString, {headers: new HttpHeaders().set('content-type','application/json')},
  )
      .subscribe(data => {
        this.loadCustomers();
      });
  }
}
