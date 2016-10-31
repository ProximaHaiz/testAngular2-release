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
import {RolesEnum} from "../pages/users/roles.enum";
import {USERS_LIST} from "./url";


@Injectable()
export class UserService extends AbstractService {
    specOffers: User[];

    constructor(private _http: Http) {
        super();
    }

    initUsers(): User[] {
        return USERS_LIST;
    }


}