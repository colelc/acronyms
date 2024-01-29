import { Routes } from '@angular/router';
import { AcronymsUserViewComponent } from './acronyms-user-view/acronyms-user-view.component';
import { AcronymsAdminViewComponent } from './acronyms-admin-view/acronyms-admin-view.component';
import { NewAcronymComponent } from './new-acronym/new-acronym.component';
import { AcronymsEditComponent } from './acronyms-edit/acronyms-edit.component';
// import { CrisisListComponent } from './crisis-list/crisis-list.component';
// import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: "admin-view", 
        component: AcronymsAdminViewComponent
    }, // admin list view: extra column for edit (new page opens, a form)
    {
        path: "user-view", 
        component: AcronymsUserViewComponent
    }, // user list view - all read-only
    {
        path: "new-acronym", 
        component: NewAcronymComponent
    }, // admin form, when admin person has clicked "New Acronym"
    {
        path: "edit", 
        component: AcronymsEditComponent
    },
     {
         path: "", 
         component: AppComponent
     },
     {
        path: "**",
        component: PageNotFoundComponent 
        // quirky here.  I've set up my PageNotFound html to be blank.
        // Come back and fix this later, when you understand routing better.
     },

    // {path: 'crisis-list', component: CrisisListComponent},
    // {path: 'heroes-list', component: HeroesListComponent}
];
