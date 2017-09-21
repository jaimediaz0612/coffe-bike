import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";

@Component({
  selector: 'customers-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  customer:Customer;
  constructor() { }

  ngOnInit() {
    this.customer = new Customer();
  }

}
