import { Component } from '@angular/core';
import { Acronym } from '../interface/acronym-if';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AcronymsService } from '../service/acronyms.service';

@Component({
  selector: 'app-acronyms-edit',
  standalone: true,
  imports: [NgFor, FormsModule],
  providers: [AcronymsService],
  templateUrl: './acronyms-edit.component.html',
  styleUrl: './acronyms-edit.component.css'
})
export class AcronymsEditComponent {
  acronyms: Acronym[] = [];
  enableSaveIcon : string = "disabled-link";
  test: string = "some test value";

  constructor(private acronymsService: AcronymsService) {
  }

  calculateSaveClass(id: number) {
    //console.log("calculateSaveClass for id = " + id);
    const a = this.acronymsService.getAcronymById(id);
    if (a !== null) {
      if (a.acronym.length < 2) {
        return "disabled-link";
      } else {
        return "enabled-link";
      }
    }
    return "disabled-link";
  }

  onInputKeyUp() {
    console.log("onInputKeyUp:  ");

     const acronymList = this.acronymsService.getAcronyms();
     console.log(acronymList);

  }

  private applyKeyUpUpdate(a: Acronym, field: string, updated: string) {
    switch(field) {
      case "acronym":
        a.acronym = updated;
        break;
      case "refersTo":
        a.refersTo = updated;
        break;
      case "areaKey":
        a.areaKey = updated;
        break;
      default:
        console.log("uh oh, what attribute are we working with?");
        break;
    }
  }

  onTextareaKeyUp(event: any, id: number, field: string) {
    console.log("ontextareakeyup");

    const x = this.acronymsService.getAcronyms();
    console.log("after going back to service");
    console.log(x);
  }

  onTextareaPaste(event: any, id: number, field: string) {
    console.log("ontextareapaste");
  }

  getAcronymId(id: number) {
    return String(id);
  }

  getSaveAcronymId(id: number) {
    return "id-save-" + Number(id);
  }

  getDeleteAcronymId(id: number) {
    return "id-delete-" + Number(id);
  }

  onSaveAcronym(event: any, acronymId: number) {
    console.log("onSaveAcronym: acronymId is " + acronymId);
    //console.log("event", event);
  }

  onDeleteAcronym(event: any, acronymId: number) {
    console.log("onDeleteAcronym: acronymId is " + acronymId);
    //console.log("event", event);
  }

  ngOnInit() {
    this.acronyms = this.acronymsService.getAcronyms();

    
  }
}
