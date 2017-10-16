import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";

@Component({
  selector: 'customers-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customersList:Array<Customer>
  constructor(

  ) { }

  ngOnInit() {

  }
}
