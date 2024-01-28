import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-acronyms-header',
  standalone: true,
  imports: [],
  templateUrl: './acronyms-header.component.html',
  styleUrl: './acronyms-header.component.css'
})
export class AcronymsHeaderComponent {

  constructor(private userService:UserService){}

  isAdmin = () => {
    return this.userService.isUserAdmin();
  }

  newAcronym = () => {
    console.log("new Acronym");
  }
}
