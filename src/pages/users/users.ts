export class User{
    firstName:string;
    lastName:string;
    email:string;
    gender:string;
    role:string;


    constructor(firstName: string, lastName: string, email: string, gender: string, role: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.role = role;
    }
}