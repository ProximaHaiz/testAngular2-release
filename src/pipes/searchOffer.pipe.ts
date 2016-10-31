import {Pipe, PipeTransform} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Companies} from "../pages/companies/companies";
@Pipe({
    name: 'companiesPipe'
})
export class CompaniesPipe implements PipeTransform {
    private errorMessage: string;

    transform(array: Array<Companies>, filterCity: string): Array<Companies> {
        console.log('--------------------------------------------------------------------------');
        console.log('FilterCity:' + filterCity);
        // console.log(array);

        filterCity = filterCity ? filterCity.toLocaleLowerCase() : null;
        console.log(array);

        var newVar2: Companies[] = [];
        array.forEach(elem=> {
            if (filterCity) {
                if (
                    elem.name.toLocaleLowerCase().search(filterCity) !== -1 ||
                    elem.address.toLocaleLowerCase().search(filterCity) !== -1 ||
                    elem.phoneNumber.toLocaleLowerCase().search(filterCity) !== -1 ||
                    elem.webSite.toLocaleLowerCase().search(filterCity) !== -1 ||
                    elem.description.toLocaleLowerCase().search(filterCity) !== -1
                ) {
                    newVar2.push(elem)
                }
                return newVar2
            } else {
                newVar2 = array;
            }
        });
        return newVar2;
    }
}
