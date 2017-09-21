import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";

@Component({
  selector: 'customers-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customersList:Array<Customer>
  constructor() { }

  ngOnInit() {
    this.customersList = [
      {
        name:"Jaime",
        address:"guamal",
        gender:"m",
        stratum: 1
      },
      {
        name:"alexandra",
        address:"guamal",
        gender:"f",
        stratum: 1
      },
      {
        name:"maria jose",
        address:"guamal",
        gender:"f",
        stratum: 1
      },
      {
        name:"joaquin",
        address:"guamal",
        gender:"m",
        stratum: 1
      },
    ];
  }
}
