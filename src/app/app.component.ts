import { Component, OnInit } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
//import { TableModule } from 'primeng/table'; 
//import { ButtonModule } from 'primeng/button';
import { AcronymsHeaderComponent } from './acronyms-header/acronyms-header.component';
import { AcronymsListComponent } from './acronyms-list/acronyms-list.component';
import { AcronymsEditComponent } from './acronyms-edit/acronyms-edit.component';
import { AcronymsFooterComponent } from './acronyms-footer/acronyms-footer.component';
import { AcronymsService } from './service/acronyms.service';

@Component({
  selector: 'app-home',
  standalone: true,
 // imports: [RouterOutlet],
  imports: [AcronymsHeaderComponent, AcronymsListComponent, AcronymsFooterComponent, AcronymsEditComponent],
  providers: [AcronymsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [/*CUSTOM_ELEMENTS_SCHEMA*/] // need this for PrimeNg to work
})

export class AppComponent implements OnInit {

  constructor(private acronymsService: AcronymsService) {
  }

  isAdministrator = () => {
    return true;
  }


  ngOnInit() {
    console.log("app ngOnInit");

  }




}
