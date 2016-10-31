// export const API_URL: string = 'https://api2.dreamclub.kz/v2/';
import {Companies} from "../pages/companies/companies";
import {User} from "../pages/users/users";
import {RolesEnum} from "../pages/users/roles.enum";
export const API_URL: string = 'https://api2-uat.dreamclub.kz/v2/';

export const COMPANIES_LIST: Companies[] = [
    new Companies("fora", "Kiev", "063222332", "www.fora.ua", "Bla bla"),
    new Companies("foxtrot", "Kiev", "063222332", "www.foxtrot.ua", "Bla bla"),
    new Companies("silpo", "Kiev", "063222332", "www.silpo.ua", "Bla bla"),
    new Companies("epicantr", "Kiev", "063222332", "www.epicantr.ua", "Bla bla")
];

export const USERS_LIST: User[] = [
    {
        firstName: 'Alik',
        lastName: 'Babaev',
        email: 'babaev@gmail.com',
        gender: 'male',
        role: RolesEnum[1]
    },
    {
        firstName: 'Vlad',
        lastName: 'Ivanov',
        email: 'Ivanov@gmail.com',
        gender: 'male',
        role: RolesEnum[2]
    },
    {
        firstName: 'Makar',
        lastName: 'Makarov',
        email: 'Makarov@gmail.com',
        gender: 'male',
        role: RolesEnum[0]
    }
]
// export const CLIENT_TOKEN: string = '74e8921d-28d9-49d2-86d9-c0f693338717';
// export const U_SOLUTION_TOKEN:string = 'u-solutins-token';
// export const U_SOLUTION_PHONE:string = 'u-solutins-phone';
// export const U_SOLUTION_FB_PROFILE:string = 'u-solutins-fb_profile';
// export const U_SOLUTION_GOOGLE_PROFILE:string = 'u-solutins-google_profile';
