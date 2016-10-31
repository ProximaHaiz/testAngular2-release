import {Component, AfterViewInit, ViewEncapsulation, EventEmitter, Input, Output} from "@angular/core";

declare var jQuery: any;

@Component({
    selector: 'material-button',
    templateUrl: 'src/components/material-button/material-button.html',
})
export class MaterialButtonComponent implements AfterViewInit {
    @Input() disabled: boolean;
    @Input() title: string;
    @Input() icon: string;
    @Output() submitClick: EventEmitter<any> = new EventEmitter();

    ngAfterViewInit() {
        // jQuery('.tooltipped').tooltip({delay: 50});
    }

    submit() {
        this.submitClick.emit('submit');
    }

}
