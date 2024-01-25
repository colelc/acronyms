//import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { TableModule } from 'primeng/table'; 
//import { ButtonModule } from 'primeng/button';
import { Doggie } from './doggie';
import { AcronymsHeaderComponent } from './acronyms-header/acronyms-header.component';
import { AcronymsListComponent } from './acronyms-list/acronyms-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
 // imports: [RouterOutlet],
  imports: [NgFor, AcronymsHeaderComponent, AcronymsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // need this for PrimeNg to work
})
export class AppComponent implements OnInit {
  //title = 'Acronyms';
  doggieList : Doggie[] = [];
  cols: any[] = [];

  disabledAddDoggieButton: boolean = false;
  disabledEditDoggieButton: boolean = true;

  
  constructor() {
    setTimeout(() => {
      this.disabledEditDoggieButton = false;
    }, 2000);
  }

  ngOnInit() {
    console.log("ngOnInit");
  }
  
  onAddDoggie(event: any) {
    console.log("onAddDoggie");
    console.log("event", event);
  }
}
