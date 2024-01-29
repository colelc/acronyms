import { Routes } from '@angular/router';
import { AcronymsUserViewComponent } from './acronyms-user-view/acronyms-user-view.component';
import { AcronymsAdminViewComponent } from './acronyms-admin-view/acronyms-admin-view.component';
import { NewAcronymComponent } from './new-acronym/new-acronym.component';
import { AcronymsEditComponent } from './acronyms-edit/acronyms-edit.component';
// import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    // {
    //     path: "", 
    //    component: AppComponent
    //    //redirectTo: "",
    //    //pathMatch: "full"
    // },
    {
        path: "admin-view", 
        component: AcronymsAdminViewComponent
    }, // admin list view: extra column for edit (new page opens, a form)
    {
        path: "user-view", 
       // component: AcronymsUserViewComponent
       component: AppComponent
    }, // user list view - all read-only
    {
        path: "new-acronym", 
        component: NewAcronymComponent
    }, // admin form, when admin person has clicked "New Acronym"
    {
        path: "edit", 
        component: AcronymsEditComponent
    },

    // {path: 'crisis-list', component: CrisisListComponent},
    {
        path: "**",
        component: PageNotFoundComponent 
        // quirky here.  I've set up my PageNotFound html to be blank.
        // Come back and fix this later, when you understand routing better.
     }
];
