import {Pipe, PipeTransform} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {User} from "../pages/users/users";

@Pipe({
    name: 'userPipe'
})
export class UserPipe implements PipeTransform {
    private errorMessage: string;

    transform(array: Array<User>, filterCity: string): Array<User> {
        console.log('--------------------------------------------------------------------------');
        console.log('FilterCity:' + filterCity);
        filterCity = filterCity ? filterCity.toLocaleLowerCase() : null;
        console.log(array);

        var newVar2: User[] = [];
        array.forEach(elem=> {
            if (filterCity) {
                if (
                    elem.firstName.toLocaleLowerCase().search(filterCity) !== -1 ||
                    elem.lastName.toLocaleLowerCase().search(filterCity) !== -1 ||
                    elem.email.toLocaleLowerCase().search(filterCity) !== -1 ||
                    elem.gender.toLocaleLowerCase().search(filterCity) !== -1 ||
                    elem.role.toLocaleLowerCase().search(filterCity) !== -1
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
