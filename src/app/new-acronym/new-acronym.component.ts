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
  acronym: Acronym;
  status: string = "Start typing!"
  messageStatusClass : string = "input-box-status";
  submitButtonClass: string = "submit-button-disabled";

  constructor() {
    this.acronym = {
        id: 0, 
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

  onKeyUp = () => {
    if (this.acronym.acronym.length > 0  
      || this.acronym.definition.length > 0
      || this.acronym.areaKey.length > 0
      || this.acronym.refersTo.length > 0) {
         this.status = "Working ...";
      }

    if (this.acronym.acronym.length > 1  
      && this.acronym.definition.length > 0
      && this.acronym.areaKey.length > 0
      && this.acronym.refersTo.length > 0) {
        this.submitButtonClass = "submit-button";
        this.status = "Ready";
        this.messageStatusClass = "input-box-status-ready";
      } else {
        this.submitButtonClass = "submit-button-disabled";
        this.messageStatusClass = "input-box-status";
      }
  }

  onClick = () => {
    console.log("onClick", this.acronym);
  }

  ngOnInit(): void {
    console.log("NewAcronym ngOnInit");
  }

}
