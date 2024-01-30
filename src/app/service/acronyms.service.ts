import { Injectable } from "@angular/core";
import { Acronym } from "../interface/acronym-if";
import { Tag } from "../interface/tag-if";
import { HttpService } from "./http.service";

@Injectable({providedIn: "root"})
export class AcronymsService {

    private acronyms: Acronym[] =  [
        {
          id: 35, 
          acronym: "BDW", 
          refersTo: "Blue Devil Weekend", 
          definition: "Weekend-long event for admitted students, organized by the Office of Admissions and student volunteers. There is a BDW in February and again in April to accommodate all admitted studentsâ€™ timelines. Admissions also hosts several other weekend events for prospective Daytime students in Fall. Also, the admitted studentsâ€™ weekend for the MMS and MQM programs is called Blue Devil Experience and for the EMBA programs is called Blue Devil Celebration.", 
          areaKey: "Admissions",
          active: true,
          tags: [
                {id: 1, tag: "Admissions", active: true, 
                createdBy: "tagCBy", created: "tagC", lastUpdatedBy: "tagLuBy", lastUpdated: "tagLu"},
                {id: 2, tag: "Tag 2", active: true, 
                createdBy: "tagCBy", created: "tagC", lastUpdatedBy: "tagLuBy", lastUpdated: "tagLu"}
            ],
          tagString: "Tag 1, Tag 2",
          createdBy: "createdBy",
          created: "created",
          lastUpdatedBy: "lastUpdatedBy",
          lastUpdated: "lastUpdated"
        },
        {
          id: 72, 
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
          tagString: "Tag 1, Tag 2",
          createdBy: "createdBy",
          created: "created",
          lastUpdatedBy: "lastUpdatedBy",
          lastUpdated: "lastUpdated"
        },
        {
          id: 21, 
          acronym: "FANFL", 
          refersTo: "Financial Analysis for Non-Finance Leaders", 
          definition: "This class introduces students to the essential elements of financial reporting, including managerial and financial accounting, and helps them develop a greater understanding of how financial information is used as a strategic tool for decision making.", 
          areaKey: "Exec Ed",
          active: true,
          tags: [
                {id: 1, tag: "Exec Ed", active: true, 
                createdBy: "tagCBy", created: "tagC", lastUpdatedBy: "tagLuBy", lastUpdated: "tagLu"},
                {id: 2, tag: "Tag 2", active: true, 
                createdBy: "tagCBy", created: "tagC", lastUpdatedBy: "tagLuBy", lastUpdated: "tagLu"}
            ],
          tagString: "Tag 1, Tag 2",
          createdBy: "createdBy",
          created: "created",
          lastUpdatedBy: "lastUpdatedBy",
          lastUpdated: "lastUpdated"
        }
    ];

    constructor(private httpService: HttpService) {

    }

    getAcronyms = () => {
        // by slicing, this method returns a new array which will always have
        //  the exact copy of the acronyms array within this class
        return this.acronyms.slice();
    }

    getAcronymById = (id: number) => {
        for (let a of this.acronyms) {
            if (a.id === id) {
              return a;
            }
        }
        return null;
    }

    setAcronym = (id: number, acronym: string) => {
        console.log("setAcronym: id = " + id + " acronym = " + acronym);
    }

    initAcronym = () => {
      return {
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

    // initializeNewAcronym = () => {
    //   console.log("initialize new acronym");
    //   const a = {} as Acronym;
    //   a.id = 0;
    //   a.acronym = "";
    //   a.refersTo = "Refers To";
    //   a.definition = "Definition";
    //   a.areaKey = "Area Key";
    //   a.active = true;

    //   const t = {} as Tag;
    //   a.tags = [t];
    //   a.tagString = "";
      
    //   a.created = "";
    //   a.createdBy = "";
    //   a.lastUpdated = "";
    //   a.lastUpdatedBy = "";

    //   const newAcronymList: Acronym[] = [];
    //   newAcronymList.push(a);

    //   for (let a of this.acronyms) {
    //     newAcronymList.push(a);
    //   }

    //   this.acronyms = [...newAcronymList];

    //   for (let a of this.acronyms) {
    //     console.log(a);
    //   }
    // }

    addAcronym = (newAcronym:Acronym) => {
      console.log("addAcronym: ", newAcronym);
      this.httpService.addAcronym(newAcronym);
    }

}