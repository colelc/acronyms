import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
//import { TableModule } from 'primeng/table'; 
//import { ButtonModule } from 'primeng/button';
import { AcronymsHeaderComponent } from './acronyms-header/acronyms-header.component';
import { AcronymsListComponent } from './acronyms-list/acronyms-list.component';
import { AcronymsEditComponent } from './acronyms-edit/acronyms-edit.component';
import { AcronymsFooterComponent } from './acronyms-footer/acronyms-footer.component';
import { AcronymsAdminViewComponent } from './acronyms-admin-view/acronyms-admin-view.component';
import { AcronymsUserViewComponent } from './acronyms-user-view/acronyms-user-view.component';
import { AcronymsService } from './service/acronyms.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, RouterOutlet, 
    AcronymsHeaderComponent, AcronymsListComponent, AcronymsFooterComponent, AcronymsEditComponent,
    AcronymsAdminViewComponent, AcronymsUserViewComponent
  ],
  providers: [AcronymsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [/*CUSTOM_ELEMENTS_SCHEMA*/] // need this for PrimeNg to work
})

export class AppComponent implements OnInit {

  constructor(private acronymsService: AcronymsService) {
  }

  isAdministrator = () => {
    console.log("returning TRUE for administrator")
    return true;
  }


  ngOnInit() {
    console.log("app ngOnInit");

  }




}
