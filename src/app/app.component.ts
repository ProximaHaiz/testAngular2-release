import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    updateInput(event: any, type: string) {
    }

    update(value:any){
        console.log(value)
    }
}
