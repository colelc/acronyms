import { Acronym } from "../interface/acronym-if";
import { Tag } from "../interface/tag-if";

export class AcronymsService {

    private acronyms: Acronym[] =  [
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
          tagString: "Tag 1, Tag 2",
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
          tagString: "Tag 1, Tag 2",
          createdBy: "createdBy",
          created: "created",
          lastUpdatedBy: "lastUpdatedBy",
          lastUpdated: "lastUpdated"
        }
    ];

    constructor() {}

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

    initializeNewAcronym = () => {
      console.log("initialize new acronym");
      const a = {} as Acronym;
      a.id = 0;
      a.acronym = "";
      a.refersTo = "Refers To";
      a.definition = "Definition";
      a.areaKey = "Area Key";
      a.active = true;

      const t = {} as Tag;
      a.tags = [t];
      a.tagString = "";
      
      a.created = "";
      a.createdBy = "";
      a.lastUpdated = "";
      a.lastUpdatedBy = "";

      const newAcronymList: Acronym[] = [];
      newAcronymList.push(a);

      for (let a of this.acronyms) {
        newAcronymList.push(a);
      }

      this.acronyms = [...newAcronymList];

      for (let a of this.acronyms) {
        console.log(a);
      }
    }

}