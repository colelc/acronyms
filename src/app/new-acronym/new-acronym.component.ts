import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AcronymsAdminViewComponent } from '../acronyms-admin-view/acronyms-admin-view.component';
import { Acronym } from '../interface/acronym-if';

@Component({
  selector: 'app-new-acronym',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-acronym.component.html',
  styleUrl: './new-acronym.component.css'
})
export class NewAcronymComponent implements OnInit {
  // private acronyms: Acronym[] =  [
  acronym: Acronym;

  constructor() {
    this.acronym = {
        id: 35, 
        acronym: "", 
        refersTo: "", 
        definition: "",
        areaKey: "",
        active: true,
        tags: [],
        tagString: "",
        createdBy: "",
        created: "",
        lastUpdatedBy: "",
        lastUpdated: ""
    }
  }

  ngOnInit(): void {
    console.log("NewAcronym ngOnInit");
  }

}
