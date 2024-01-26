import { Component } from '@angular/core';
import { Acronym } from '../interface/acronym-if';
import { NgFor } from '@angular/common';
import { AcronymsService } from '../service/acronyms.service';

@Component({
  selector: 'app-acronyms-edit',
  standalone: true,
  imports: [NgFor],
  providers: [AcronymsService],
  templateUrl: './acronyms-edit.component.html',
  styleUrl: './acronyms-edit.component.css'
})
export class AcronymsEditComponent {
  acronyms: Acronym[] = [];
  tooltipId: string = "";
  tooltipText: string = "";
  enableSaveIcon : string = "disabled-link";

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

  onAcronymKeyUp(event : any, id: number) {
    const updatedAcronym = event.target.value;
    console.log("onAcronymKeyUp: event.target.value = " + updatedAcronym + " for id = " + String(id));

     const acronymList = this.acronymsService.getAcronyms();
     console.log(acronymList);

    for (let a of acronymList) {
      if (a.id === id) {
        a.acronym = updatedAcronym;
        break;
      }
    }

    const x = this.acronymsService.getAcronyms();
    console.log("after going back to service");
    console.log(x);
  }

  // onAcronymKeyUp(value : string, id: string) {
  //   console.log(id + " -> " + value);
  //   const targetId = Number(id);

  //   const acronymList = this.acronymsService.getAcronyms();
  //  // acronymList.reduce((result, ac) => result, acronymList);
  //  console.log("Acronym List before reducing: " );
  //  console.log(acronymList);
  //  console.log("Start reducing");

  //   const modifiedArray = acronymList.reduce((acc, a) => {
  //     if (a.id === targetId) {
  //       const modifiedObject = { ...a, acronym: value };
  //       acc.pop();
  //       acc.push(modifiedObject);
  //     } else {
  //       acc.push(a);
  //     }
  //     return acc;
  //   }, acronymList);
  //   console.log("Done reducing: modified array");
  //   console.log(modifiedArray);
  // }

  getAcronymId(id: number) {
    return String(id);
  }

  getSaveAcronymId(id: number) {
    return "id-save-" + Number(id);
  }

  getDeleteAcronymId(id: number) {
    return "id-delete-" + Number(id);
  }

  getToolTipId(id: number) {
    return "id-tooltip-" + Number(id);
  }

  onSaveAcronym(event: any, acronymId: number) {
    console.log("onSaveAcronym: acronymId is " + acronymId);
    //console.log("event", event);
  }

  onDeleteAcronym(event: any, acronymId: number) {
    console.log("onDeleteAcronym: acronymId is " + acronymId);
    //console.log("event", event);
  }

  onShowToolTip(event: any, id: number, tooltip: string) {
  }

  onHideToolTip(event: any, id: number) {
  }

  ngOnInit() {
    console.log("acronyms-edit-component: ngOnInit");
    this.acronyms = this.acronymsService.getAcronyms();

    
  }
}
