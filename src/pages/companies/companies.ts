import {User} from "../users/users";
export class Companies {
    name: string;
    address: string;
    phoneNumber: string;
    webSite: string;
    description: string;
    lat: number;
    lng: number;
    // selectedUsers: User[];
    selectedUsers: User[];


    constructor(name: string, address: string, phoneNumber: string, webSite: string, description: string) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.webSite = webSite;
        this.description = description;
    }
}