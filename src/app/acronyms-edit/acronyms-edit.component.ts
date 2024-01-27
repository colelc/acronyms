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
      if (a.acronym.length < 2  ||  a.refersTo.length === 0  ||  a.definition.length === 0  ||  a.areaKey.length === 0) {
        return "disabled-link";
      } else {
        return "enabled-link";
      }
    }
    return "disabled-link";
  }
/*
  onInputKeyUp() {
    console.log("onInputKeyUp:  ");

    // const acronymList = this.acronymsService.getAcronyms();
    // console.log(acronymList);

  }
*/
  onTextareaKeyUp(event: any, id: number, field: string) {
    console.log("ontextareakeyup");

    const x = this.acronymsService.getAcronyms();
    console.log(x);
  }

  onTextareaPaste(event: any, id: number, field: string) {
    console.log("ontextareapaste");
  }

  // getAcronymId(id: number) {
  //   return String(id);
  // }

  getSaveAcronymId(id: number) {
    return "id-save-" + Number(id);
  }

  getDeleteAcronymId(id: number) {
    return "id-delete-" + Number(id);
  }

  onSaveAcronym( acronymId: number) {
    console.log("onSaveAcronym: acronymId is " + acronymId);
    //console.log("event", event);
  }

  onDeleteAcronym(acronymId: number) {
    console.log("onDeleteAcronym: acronymId is " + acronymId);
    //console.log("event", event);
  }

  ngOnInit() {
    this.acronyms = this.acronymsService.getAcronyms();

    
  }
}
