import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainContentComponent} from "../pages/main-content";
import {UsersComponent} from "../pages/users/users.component";
import {CompaniesComponent} from "../pages/companies/companies.component";
@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/content',
                pathMatch: 'full'
            },
            {
                path: 'content', component: MainContentComponent, children: [
                {path: '', component: CompaniesComponent},
                {path: 'users', component: UsersComponent},
                {path: 'companies', component: CompaniesComponent}
            ]
            },
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}