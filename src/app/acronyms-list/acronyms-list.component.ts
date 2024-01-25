import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { Doggie } from '../doggie';
import { Acronym } from '../acronym-if';

@Component({
  selector: 'app-acronyms-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './acronyms-list.component.html',
  styleUrl: './acronyms-list.component.css'
})
export class AcronymsListComponent {
  doggieList : Doggie[] = [];
  acronyms: Acronym[] = [];
  cols: any[] = [];

  ngOnInit() {
    console.log("ngOnInit");
    this.cols = [
      {field: "id", header: "ID"},
      {field: "name", header: "Doggie Name"},
      {field: "age", header: "Age"},
      {field: "location", header: "Lives In"}
    ];

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

    this.doggieList = [
      {id: 1, name: "Oggie", age: 8, location: "North Carolina" },
      {id: 2, name: "Shadow", age: 3, location: "North Carolina" },
      {id: 3, name: "Poppy", age: 9, location: "Maryland" },
      {id: 4, name: "Mordel", age: 3, location: "Maryland" }
    ];

    for (let d of this.doggieList) {
      console.log(d.id + " " + d.name + " " + d.age);
    }
  }

  onAddDoggie(event: any) {
    console.log("onAddDoggie");
    console.log("event", event);
  }
}
