//import { Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { RouterOutlet } from '@angular/router';

//import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { TableModule } from 'primeng/table'; 
//import { ButtonModule } from 'primeng/button';
import { AcronymsHeaderComponent } from './acronyms-header/acronyms-header.component';
import { AcronymsListComponent } from './acronyms-list/acronyms-list.component';
import { AcronymsEditComponent } from './acronyms-edit/acronyms-edit.component';
import { AcronymsFooterComponent } from './acronyms-footer/acronyms-footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
 // imports: [RouterOutlet],
  imports: [AcronymsHeaderComponent, AcronymsListComponent, AcronymsFooterComponent, AcronymsEditComponent],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [/*CUSTOM_ELEMENTS_SCHEMA*/] // need this for PrimeNg to work
})

export class AppComponent implements OnInit {

  public clickedEvent: Event = new Event(""); // don't like that I have to initialize event here

  constructor() {
  }

  childEventClicked= (event: Event) => {
    this.clickedEvent = event;
  }

  isAdministrator = () => {
    return true;
  }


  ngOnInit() {
    console.log("app ngOnInit");

  }




}
