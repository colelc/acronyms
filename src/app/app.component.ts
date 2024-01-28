import { Component, OnInit } from '@angular/core';

//import { TableModule } from 'primeng/table'; 
//import { ButtonModule } from 'primeng/button';
import { AcronymsHeaderComponent } from './acronyms-header/acronyms-header.component';
import { AcronymsListComponent } from './acronyms-list/acronyms-list.component';
import { AcronymsEditComponent } from './acronyms-edit/acronyms-edit.component';
import { AcronymsFooterComponent } from './acronyms-footer/acronyms-footer.component';
import { AcronymsAdminViewComponent } from './acronyms-admin-view/acronyms-admin-view.component';
import { AcronymsUserViewComponent } from './acronyms-user-view/acronyms-user-view.component';
import { AcronymsService } from './service/acronyms.service';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    AcronymsHeaderComponent, AcronymsListComponent, AcronymsFooterComponent, AcronymsEditComponent,
    AcronymsAdminViewComponent, AcronymsUserViewComponent
  ],
  providers: [AcronymsService, UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [/*CUSTOM_ELEMENTS_SCHEMA*/] // need this for PrimeNg to work
})

export class AppComponent implements OnInit {

  constructor(private acronymsService: AcronymsService, private userService: UserService) {
  }

  isAdministrator = () => {
    return this.userService.isUserAdmin();
  }


  ngOnInit() {
    console.log("app ngOnInit");

  }




}
