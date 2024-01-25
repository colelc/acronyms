import { Tag } from "./tag-if";

export interface Acronym {
    id: number;
    acronym: string;
    refersTo: string;
    definition: string;
    areaKey: string;
    active: boolean;
    tags:  Tag[];
    createdBy: string;
    created: string;
    lastUpdatedBy: string;
    lastUpdated: string;
}
