import {Component, AfterViewInit} from "@angular/core";
import {Router} from "@angular/router";

declare var jQuery: any;

@Component({
    selector: 'material-navbar',
    // templateUrl: 'src/components/material-nav-bar/material-nav-bar.html'
    templateUrl: 'material-nav-bar.html'
})
export class NavbarComponent implements AfterViewInit {
    ngAfterViewInit() {
        jQuery(".button-collapse").sideNav();

        jQuery(document).ready(function () {
            jQuery('ul.tabs').tabs();
        });
    }

    constructor(private router: Router) {

    }

    goTo(page: string) {
        switch (page) {
            case 'users':
                this.router.navigate(['/content/users']);
                break;
            case 'companies':
                this.router.navigate(['/content/companies']);
                break;
        }
    }
}
