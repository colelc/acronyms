import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import {  Routes, RouterOutlet, RouterLink} from '@angular/router';
import { NewAcronymComponent } from '../new-acronym/new-acronym.component';

const routes: Routes = [
  { 
    path: "new-acronym", 
    component: NewAcronymComponent
 }
//  { path: '', component: AboutComponent },
];

@Component({
  selector: 'app-acronyms-header',
  standalone: true,
  imports: [FormsModule,
     RouterOutlet, RouterLink
  ],
  templateUrl: './acronyms-header.component.html',
  styleUrl: './acronyms-header.component.css'
})
export class AcronymsHeaderComponent {

  filterTerm: string = "";

  constructor(private userService:UserService){}

  isAdmin = () => {
    return this.userService.isUserAdmin();
  }

  onKeyupFilter = () => {
    console.log("onkeyup filter: filterTerm = " + this.filterTerm);
  }

  newAcronym = () => {
    console.log("new Acronym");
  }
}
