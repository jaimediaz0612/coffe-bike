import { Component, OnInit } from '@angular/core';
import { Customer } from "../customer";



@Component({
  selector: 'customers-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public customer:Customer;

  stratumList = [ 
    {value:1, label:'One'},
    {value:2, label:'two'},
    {value:3, label:'three'},
    {value:4, label:'four'},
    {value:5, label:'five'},
    {value:6, label:'six'},
  ];
  
  genderOptionList =[
    {value:0, label:"hombre"},
    {value:1, label:"mujer"},
  ];
   
  constructor() { }

  ngOnInit() {
    this.customer = new Customer();
    this.customer.name="pepito"
  }

  onNewClick(){
    this.customer = new Customer();


  }
  onSaveClick(){}
}
