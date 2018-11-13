import { Component } from '@angular/core';
import { trigger, state, animate, style, transition, keyframes } from '@angular/animations'


@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    animations: [
        trigger('toggleElement', [
            state('open', style({height: '*'})),
            state('closed', style({ 'height': '0px', 'font-size' : '0px' })),
            transition('closed <=> open', [
                animate("1500ms cubic-bezier(1, 0, 0, 1)")
            ])
        ])
    ],
})
export class HomeComponent {
    open: boolean = false;
    toggleElement: string = "closed";

    toggle() {
        this.open = !this.open;
        if(this.open) {
            this.toggleElement = 'open';
        } else {
            this.toggleElement = 'closed';
        }
    }
}
