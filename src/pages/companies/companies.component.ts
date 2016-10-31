import {Component, AfterViewInit, OnInit} from "@angular/core";
import {Companies} from "./companies";
import {CompanyService} from "../../services/company.service";
import {SelectItem} from "primeng/components/common/api";
import {User} from "../users/users";
import {UserService} from "../../services/user.service";
import {COMPANIES_LIST} from "../../services/url";

declare var jQuery: any;

@Component({
    selector: 'companies',
    templateUrl: '/companies.html',
})
export class CompaniesComponent implements AfterViewInit,OnInit {
    public companies: Companies[];
    private company: Companies;
    public companyFilter: string;
    private idToDelete: number;
    public isShowMap: boolean = false;
    public isValid: boolean = false;
    public showReuqiredError: boolean = false;
    public selectedUser: number;
    public searchValue: string;
    public idToShowUsers: number;

    public isShowUserList: boolean = false;


    private users: Array<User>;
    private selectedUsers: Set<User>;

    constructor(private companyService: CompanyService,
                private userService: UserService) {


    }

    ngOnInit() {
        this.searchValue = '';
        this.selectedUser = 0;
        this.getCompanies();
        this.selectedUsers = new Set<User>();
        this.company = new Companies("", "", "", "", "");
        this.company.selectedUsers = [];
    }

    /**
     * get all companies from service
     */
    getCompanies() {
        this.companies = this.companyService.initCompanies();
    }

    /**
     * @param event from input component
     * @param types type of field
     */
    updateInput(event: any, type: number) {
        this.setToCompany(event.value, type);
        if (type === 1000) {
            this.companyFilter = event.value;
        }
        // console.log(this.companyFilter);
    }

    openModalUsers(id: number) {
        this.isShowUserList = true;
        jQuery('#modal-users').openModal();
        this.idToShowUsers = id;
    }

    setToCompany(value: string, type: number) {
        switch (type) {
            case 0:
                this.company.name = value;
                break;
            case 1:
                this.company.address = value;
                break;
            case 2:
                this.company.phoneNumber = value;
                break;
            case 3:
                this.company.webSite = value;
                break;
            case 4:
                this.company.description = value;
                break;
        }
        if (this.company.name &&
            this.company.address &&
            this.company.phoneNumber &&
            this.company.webSite &&
            this.company.description
        ) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
        console.log(this.company);
    }

    setGender(gender: string) {
        console.log(gender);
    }


    delete(index: number) {
        this.idToDelete = index;
        console.log(this.idToDelete)
    }

    edit(index: number) {
        console.log(index);
    }

    save() {
        console.log('save');
        if (this.isValid) {
            this.showReuqiredError = false;
            if (this.selectedUsers) {
                this.selectedUsers.forEach(item=> {
                    this.company.selectedUsers.push(item);
                })
            }

            COMPANIES_LIST.push(this.company);
            // this.companies.push(this.company);
            // this.companies.push(this.company);
            this.closeModalAddEdit();
            this.company = new Companies("", "", "", "", "");
            this.company.selectedUsers = [];
        } else {
            this.showReuqiredError = true;
        }
    }

    updateCompany() {
        console.log('update');
    }

    confirmDelete() {
        this.companies.splice(this.idToDelete, 1);
        console.log('delete');
        console.log(this.companies);
        this.idToDelete = 0;
    }

    openModal(id: number) {
        switch (id) {
            case 1:
                /*       jQuery('.dropdown-button').dropdown({
                 inDuration: 300,
                 outDuration: 225,
                 constrain_width: false, // Does not change width of dropdown to that of the activator
                 hover: true, // Activate on hover
                 gutter: 0, // Spacing from edge
                 belowOrigin: false, // Displays dropdown below the button
                 alignment: 'left' // Displays dropdown with edge aligned to the left of button
                 }
                 );*/
                this.users = this.userService.initUsers();
                console.log(this.users);
                jQuery('#modal-add-edit').openModal();
                break;
            case 2:
                jQuery('#modal-to-delete').openModal();
                break;
        }
    }

    selectUser(action: any) {
        console.log(action);
        let user = this.users[this.selectedUser];
        if (user) {
            this.selectedUsers.add(user);
            console.log('VALUE:');
            // this.company.selectedUsers.push(user);
        }
        console.log('COMPANY:');
        console.log(this.company);

        // console.log(user);
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


    ngAfterViewInit() {

        jQuery(document).ready(function () {
            jQuery('select').material_select();
        });

        // jQuery('.tooltipped').tooltip({delay: 50});
    }
}
