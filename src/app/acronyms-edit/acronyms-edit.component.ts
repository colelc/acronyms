import { Component } from '@angular/core';
import { Acronym } from '../interface/acronym-if';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-acronyms-edit',
  standalone: true,
  imports: [NgFor],
  templateUrl: './acronyms-edit.component.html',
  styleUrl: './acronyms-edit.component.css'
})
export class AcronymsEditComponent {
  acronyms: Acronym[] = [];
  tooltipId: string = "";
  tooltipText: string = "";

  getEditAcronymId(id: number) {
    return "id-edit-" + Number(id);
  }

  getDeleteAcronymId(id: number) {
    return "id-delete-" + Number(id);
  }

  getToolTipId(id: number) {
    return "id-tooltip-" + Number(id);
  }

  onEditAcronym(event: any, acronymId: number) {
    console.log("onEditAcronym: acronymId is " + acronymId);
    //console.log("event", event);
  }

  onDeleteAcronym(event: any, acronymId: number) {
    console.log("onDeleteAcronym: acronymId is " + acronymId);
    //console.log("event", event);
  }

  onShowToolTip(event: any, id: number, tooltip: string) {
    //console.log("onShowToolTip: " + " " + id + " " + tooltip + " " + event.target.id);
   // const el = document.getElementById(this.getToolTipId(id));
   // console.log("el", el);
    //el?.innerText = tooltip;
   // if ((el as HTMLInputElement)?.innerText) {
     // this.term = (event.target as HTMLInputElement).value;
      //console.log("innerText");
   // }

   // this.tooltipText = tooltip;
  }

  onHideToolTip(event: any, id: number) {
    //console.log("onHideToolTip: " + id + " " + event.target.id);
    //this.tooltipText = "";
  }

  ngOnInit() {
    console.log("acronyms-list-component: ngOnInit");

    this.acronyms = [
        {
          id: 1, 
          acronym: "ABC", 
          refersTo: "refersTo", 
          definition: "definition", 
          areaKey: "areaKey",
          active: true,
          tags: [
                {id: 1, tag: "Tag 1", active: true, 
                createdBy: "tagCBy", created: "tagC", lastUpdatedBy: "tagLuBy", lastUpdated: "tagLu"},
                {id: 2, tag: "Tag 2", active: true, 
                createdBy: "tagCBy", created: "tagC", lastUpdatedBy: "tagLuBy", lastUpdated: "tagLu"}
            ],
          createdBy: "createdBy",
          created: "created",
          lastUpdatedBy: "lastUpdatedBy",
          lastUpdated: "lastUpdated"
        },
        {
          id: 2, 
          acronym: "DEF", 
          refersTo: "refersTo", 
          definition: "definition", 
          areaKey: "areaKey",
          active: true,
          tags: [
                {id: 1, tag: "Tag 1", active: true, 
                createdBy: "tagCBy", created: "tagC", lastUpdatedBy: "tagLuBy", lastUpdated: "tagLu"},
                {id: 2, tag: "Tag 2", active: true, 
                createdBy: "tagCBy", created: "tagC", lastUpdatedBy: "tagLuBy", lastUpdated: "tagLu"}
            ],
          createdBy: "createdBy",
          created: "created",
          lastUpdatedBy: "lastUpdatedBy",
          lastUpdated: "lastUpdated"
        }
    ];

  }
}
