import {Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";

export abstract class AbstractService {
  private currency: string = 'RPO';

  constructor() {

  }

  protected  _handleError(error: any) {
    // error = true;
    console.log("_handleError1: " + error.status); //gives the object object
    console.error("_handleError2" + error.json().errorMessage);
    return Observable.throw(error.json().errorMessage || 'Server error');
  }

  protected createAuthHeader() {

  }

  getCurrency() {
    return this.currency;
  }
}
