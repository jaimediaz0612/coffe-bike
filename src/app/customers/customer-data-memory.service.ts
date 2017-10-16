import { Injectable } from '@angular/core';
import { Customer } from "./customer";

@Injectable()
export class CustomerDataMemoryService {

  customerList:Array<Customer>;
  constructor() {

    this.customerList=[
      {
        name: "Mauro",
        address: "Chipre",
        stratum:1,
        gender: "Male"},
        {name: "Andres",
        address: "Estrella",
        stratum:3,
        gender: "Male"},
        {name: "Jaime",
        address: "Aguacate",
        stratum:3,
        gender: "Indefinido"
      }
    ]
   }
  }