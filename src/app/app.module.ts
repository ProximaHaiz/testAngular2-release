import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MaterialButtonComponent} from "../components/material-button/material-button";
import {MaterialInputComponent} from "../components/material-input/material-input";
import {NavbarComponent} from "../components/material-nav-bar/navbar.component";
import {MainContentComponent} from "../pages/main-content";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app.routes";
import {UsersComponent} from "../pages/users/users.component";
import {CompaniesComponent} from "../pages/companies/companies.component";
import {CompanyService} from "../services/company.service";
import {UserService} from "../services/user.service";
import {HttpModule} from "@angular/http";
import {ModalComponent} from "../components/material-modal/material-modal.component";
import {TextMaskModule} from "angular2-text-mask";
import {GMapModule} from "primeng/components/gmap/gmap";
import {CompaniesHandlerService} from "../services/companies-handler.service";
import {GmapComponent} from "../components/gmap/gmap";
import {CompaniesPipe} from "../pipes/searchOffer.pipe";
import {UserPipe} from "../pipes/searchUser.pipe";
import {MultiSelectModule} from "primeng/components/multiselect/multiselect";
// import {SelectItem} from "primeng/components/common/api";


@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        TextMaskModule,
        GMapModule,
        MultiSelectModule

    ],
    declarations: [
        AppComponent,
        MaterialButtonComponent,
        MaterialInputComponent,
        NavbarComponent,
        MainContentComponent,
        UsersComponent,
        CompaniesComponent,
        CompaniesPipe,
        UserPipe,

        ModalComponent,
        GmapComponent
    ],
    providers: [

        FormBuilder,
        CompanyService,
        UserService,
        CompaniesHandlerService,
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
