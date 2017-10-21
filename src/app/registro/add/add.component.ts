import { Component, OnInit } from '@angular/core';
import { Registro } from "../registro";
import { RegistroDataMemoryService } from '../registro-data-memory.service';


@Component({
  selector: 'registro-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public registro:Registro;
  
    registroOptionsList = [
      { value:0, label:"SI" },
      { value:1, label:"NO" },
    ];
  
    constructor(
      private registroDataService: RegistroDataMemoryService
    ) { }
  
    ngOnInit() {
      this.registro = new Registro();
      this.registroDataService.loadRegistro();
    }
  
    onNewRegistro() {
      this.registro = new Registro();
    }
  
    onSaveRegistro() {
      this.registroDataService.saveRegistro(this.registro);
    }
  }
  