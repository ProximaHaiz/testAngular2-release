import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Companies} from "../pages/companies/companies";

@Injectable()
export class CompaniesHandlerService {
    // Observable navItem source
    private _navItemSource = new BehaviorSubject<Companies[]>([]);
    // Observable navItem stream

    navItem$ = this._navItemSource.asObservable();

    // service command
    changeNav(number:any) {
        console.log('value changed: ' + number)
        this._navItemSource.next(number);
        return number;
    }
}