import { Acronym } from "../interface/acronym-if";

export class HttpService {

  
    constructor() {}

    addAcronym = (acronym: Acronym) => {
        console.log("HttpService.addAcronym", acronym);
    }

}