import {Component, AfterViewInit, OnInit} from "@angular/core";
import {User} from "./users";
import {UserService} from "../../services/user.service";
import {USERS_LIST} from "../../services/url";

declare var jQuery: any;

@Component({
    selector: 'users-list',
    templateUrl: 'users.html',
})
export class UsersComponent implements AfterViewInit,OnInit {
    public users: User[];
    public user: User;
    public userFilter: string;
    private idToDelete: number;
    public isShowMap: boolean = false;
    public isValid: boolean = false;
    public showReuqiredError: boolean = false;
    public selectedRole: string;
    public searchValue: string;
    private isMale: boolean = false;
    private isFemale: boolean = false;


    constructor(private userService: UserService) {

    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.selectedRole = 'User';
        this.user = new User("", "", "", "", "");
        this.users = this.userService.initUsers();
    }

    updateInput(event: any, type: number) {
        this.setToUser(event.value, type);
        if (type === 1000) {
            this.userFilter = event.value;
        }
        // console.log(this.companyFilter);
    }

    setGender(gender: string) {
        if (this.isMale) {
            // this.isMale = true;
            // this.isFemale = false;
            this.user.gender = 'male';
            this.isFemale = false;
            console.log('male');
            console.log('female' + this.isFemale);
        } else {
            this.user.gender = 'female';
            this.isMale = false;
            console.log('female');
            console.log('male' + this.isMale);

        }
    }

    setToUser(value: string, type: number) {
        switch (type) {
            case 0:
                this.user.firstName = value;
                break;
            case 1:
                this.user.lastName = value;
                break;
            case 2:
                this.user.email = value;
                break;
            case 3:
                this.user.gender = value;
                break;
            case 4:
                this.user.role = value;
                break;
        }
        this.checkIsValid();
        console.log(this.user);
    }

    private checkIsValid() {
        if (this.user.firstName &&
            this.user.lastName &&
            this.user.email &&
            this.user.gender &&
            this.user.role
        ) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
    }


    save() {
        this.checkIsValid();
        console.log('save');
        if (this.isValid) {
            this.showReuqiredError = false;
            USERS_LIST.push(this.user);
            this.closeModalAddEdit();
            this.user = new User("", "", "", "", "");
        } else {
            this.showReuqiredError = true;
        }
    }

    selectRole(action: any) {
        console.log(this.selectedRole);
        this.user.role = this.selectedRole;
    }

    updateCompany() {
        console.log('update');
    }

    confirmDelete() {
        this.users.splice(this.idToDelete, 1);
        console.log('delete');
        console.log(this.users);
        this.idToDelete = 0;
    }

    openModal(id: number) {
        switch (id) {
            case 1:
                this.users = this.userService.initUsers();
                console.log(this.users);
                jQuery('#modal-add-edit').openModal();
                break;
            case 2:
                jQuery('#modal-to-delete').openModal();
                break;
        }
    }

    openModalUsers(id: number) {
        jQuery('#modal-users').openModal();
    }


    showMap() {
        this.isShowMap = true;
        // jQuery('#modal-gmap2').openModal();
        jQuery('#modal-gmap').openModal();
    }

    closeModalAddEdit() {
        jQuery('#modal-add-edit').closeModal();
    }

    closeMoadal() {
        jQuery('#modal1').closeModal();
    }


}
