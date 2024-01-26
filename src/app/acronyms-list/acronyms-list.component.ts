import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
//import { NgOptimizedImage } from '@angular/common';
import { Acronym } from '../interface/acronym-if';
import { AcronymsService } from '../service/acronyms.service';

@Component({
  selector: 'app-acronyms-list',
  standalone: true,
  imports: [NgFor],
  providers: [AcronymsService],
  templateUrl: './acronyms-list.component.html',
  styleUrl: './acronyms-list.component.css'
})
export class AcronymsListComponent implements OnInit {
  acronyms: Acronym[] = [];

  constructor(private acronymsService: AcronymsService) {
  }

  ngOnInit() {
    console.log("acronyms-list-component: ngOnInit");
    this.acronyms = this.acronymsService.getAcronyms();
  }

  getEditAcronymId(id: number) {
    return "id-edit-" + Number(id);
  }

  getDeleteAcronymId(id: number) {
    return "id-delete-" + Number(id);
  }

  onEditAcronym(event: any, acronymId: number) {
    console.log("onEditAcronym: acronymId is " + acronymId);
    //console.log("event", event);
  }

  onDeleteAcronym(event: any, acronymId: number) {
    console.log("onDeleteAcronym: acronymId is " + acronymId);
    //console.log("event", event);
  }



}
