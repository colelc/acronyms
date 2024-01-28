import { Routes } from '@angular/router';
import { AcronymsUserViewComponent } from './acronyms-user-view/acronyms-user-view.component';
import { AcronymsAdminViewComponent } from './acronyms-admin-view/acronyms-admin-view.component';
import { NewAcronymComponent } from './new-acronym/new-acronym.component';
import { AcronymsEditComponent } from './acronyms-edit/acronyms-edit.component';

export const routes: Routes = [
    {path: "admin-view", component: AcronymsAdminViewComponent}, // admin list view: extra column for edit (new page opens, a form)
    {path: "user-view", component: AcronymsUserViewComponent}, // user list view - all read-only
    {path: "new-acronym", component: NewAcronymComponent}, // admin form, when admin person has clicked "New Acronym"
    {path: "edit", component: AcronymsEditComponent} // admin form, when admin person has clicked "Edit Acronym"
    //{path: '', component: AcronymsUserViewComponent},
    //{path: '**', redirectTo: "/", pathMatch: "full" }, // this should be pagenotfound
];
