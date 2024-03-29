import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//import { AcronymsListComponent } from './acronyms-list/acronyms-list.component';
import { AcronymsEditComponent } from './acronyms-edit/acronyms-edit.component';
import { AcronymsFooterComponent } from './acronyms-footer/acronyms-footer.component';
import { AcronymsAdminViewComponent } from './acronyms-admin-view/acronyms-admin-view.component';
import { AcronymsUserViewComponent } from './acronyms-user-view/acronyms-user-view.component';
import { ConfigService } from './service/config.service';
import { AcronymsService } from './service/acronyms.service';
import { UserService } from './service/user.service';
import { HttpService } from './service/http.service';

import { Router } from '@angular/router'
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
//import { CrisisListComponent } from './crisis-list/crisis-list.component';
//import { HeroesListComponent } from './heroes-list/heroes-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    AcronymsFooterComponent, AcronymsEditComponent,
    AcronymsAdminViewComponent, AcronymsUserViewComponent
    , HttpClientModule
    , FormsModule
    ,RouterOutlet
    , RouterLink
  ],
  providers: [AcronymsService, UserService, HttpService, ConfigService, Router],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [/*CUSTOM_ELEMENTS_SCHEMA*/] // need this for PrimeNg to work
})

export class AppComponent implements OnInit {

  administrator: boolean = false;
  filterTerm: string = "";

  constructor(private acronymsService: AcronymsService, 
    private userService: UserService,
    private router: Router) {
  }

  isAdministrator = () => {
    return this.userService.isUserAdmin();
  }

  onKeyupFilter = () => {
    console.log("onkeyup filter: filterTerm = " + this.filterTerm);
  }

  home() {
    this.administrator = this.userService.isUserAdmin();

    if (this.administrator === true) {
      console.log("ADMIN");
      this.router.navigateByUrl("/admin");
    } else {
      console.log("USER");
      this.router.navigateByUrl("/view");
    }
  }

  ngOnInit() {
    this.home();
  }




}
