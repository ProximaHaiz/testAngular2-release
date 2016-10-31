/**
 * Created by Proxima on 29.10.2016.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/Rx";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/toPromise";
import {AbstractService} from "./abstract.service";
import {User} from "../pages/users/users";
import {Companies} from "../pages/companies/companies";
import {COMPANIES_LIST} from "./url";


@Injectable()
export class CompanyService extends AbstractService {
    specOffers: Companies[];

    constructor(private _http: Http) {
        super();
    }

    initCompanies(): Companies[] {
        return COMPANIES_LIST;
    }
}