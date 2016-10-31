import {Component, AfterViewInit, ViewEncapsulation, EventEmitter, Output, Input, OnInit} from "@angular/core";

declare var jQuery: any;

@Component({
    moduleId: 'module.id',
    selector: 'material-input',
    templateUrl: 'src/components/material-input/material-input.html',
})
export class MaterialInputComponent implements AfterViewInit,OnInit {
    ngOnInit() {
        if (this.min || this.max) {
            this.isNeedToValidate = true;
        }

        this.showRequiredError = this.showRequiredError ? this.showRequiredError : false;

        if (this.isInitMask) {
            if (this.maskType) {
                switch (this.maskType) {
                    case 'phone':
                        console.log('init phone mask');
                        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
                        break;
                    case 'site':
                        console.log('SITE MASK');
                        this.mask = ['/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/'];
                        break;
                    default:
                        this.mask = 'a-zA-Z0-9_';
                        break;
                }
            }
        }

        this.fieldType = this.fieldType || 'input';
        this.min = this.min || 1;
        this.max = this.max || 5;
        console.log(this.min);
        console.log(this.max);
        this.errorMessageMin = 'min length must be more than ' + this.min;
        this.errorMessageMax = 'max length must be less than' + this.max;
        this.errorMessageRequire = this.title + ' are require';
        this.dataSuccessMessage = "correct";
        this.mainError = '';
    }

    @Input() fieldType: string;
    @Input() valueForSet: string;
    @Input() title: string;
    @Input() isInitMask: boolean;
    @Input() maskType: string;
    @Input() iconName: string;
    @Input() id: string;
    @Input() min: number;
    @Input() max: number;
    @Input() showRequiredError: boolean;
    public mask: any;
    public inputValue: string;


    public isAlreadyChange: boolean = false;
    public isValid: boolean = true;
    public isDisplayError: boolean = false;


    private errorMessageMin: string;
    private errorMessageMax: string;
    private errorMessageRequire: string;
    public mainError: string;
    public dataSuccessMessage: string;
    private isNeedToValidate: boolean = false;


    @Output()
    updateInputValue: EventEmitter<any> = new EventEmitter();

    ngAfterViewInit() {
        this.inputValue='';
        /*   if (this.isInitMask) {
         jQuery('#' + this.id).mask(this.mask, {pattern: this.pattern}, {reverse: true});
         // jQuery('#mobile-phone').mask("(999) 999-9999", {pattern: '(1[012]|[1-9]):[0-5][0-9]'});
         jQuery('.tooltipped').tooltip({delay: 5});
         } else {
         // jQuery('.mobile-phone').unmask();
         }*/
    }

    changeValue(val:string) {
        this.validate(this.inputValue);
        console.log('Change value:');
        console.log(this.inputValue);
        console.log(val);
        this.showRequiredError = false;
        this.isAlreadyChange = true;
        console.log('INPUT_COMPONENT:' + this.inputValue.length);
        this.updateInputValue.emit({
            value: this.inputValue,
            type: this.id
        });
    }

    blur() {
        this.isDisplayError = true;
        console.log('blur')
    }

    focus() {
        this.isDisplayError = false;
        console.log('focus')
    }

    /**
     * validate field and set error message
     * @param value from input filed
     */
    validate(value: string) {
        if (this.isNeedToValidate) {
            // if (this.isNeedToValidate) {
            if (value.length < this.min && value.length != 0) {
                console.log('min:' + this.min);
                this.isValid = false;
                this.mainError = this.errorMessageMin;
                this.dataSuccessMessage = "";
                // this.mainError = 'min';
            } else if (value.length > this.max) {
                console.log('max:' + this.max);
                this.isValid = false;
                this.mainError = this.errorMessageMax;
                this.dataSuccessMessage = "";
                // this.mainError = 'max'
            } else if (value.length <= 0) {
                console.log('zero:');
                this.isValid = false;
                this.mainError = this.errorMessageRequire;
                this.dataSuccessMessage = "";
            }
            else {
                this.isValid = true;
                this.mainError = '';
                this.dataSuccessMessage = "correct";
            }
            console.info(this.mainError);
        }
    }
}
