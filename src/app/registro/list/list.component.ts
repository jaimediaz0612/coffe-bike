import { Component, OnInit } from '@angular/core';
import { Registro } from "../registro";
// import { CustomerDataServerService } from '../customer-data-server.service';
import { RegistroDataMemoryService } from '../registro-data-memory.service';

@Component({
  selector: 'registro-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  ciclistaOptions = ['SI', 'NO'];

  constructor(
    private registroDataService: RegistroDataMemoryService
  ) { }

  ngOnInit() {
    this.registroDataService.loadRegistro();
  }

}
