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
        ]),

        trigger('animateCitation', [
            transition('stateA <=> stateB', [
                animate( 600, keyframes([
                    style({opacity: .5, offset: 0}),
                    style({opacity: 1, color: '#FCB514', offset: .5}),
                    style({opacity: .7, offset: .7}),
                    style({opacity: 1, offset: 1})
                ]))
            ])
        ])
    ],
    styles:[
        `
        .frame {
            margin-bottom: 10px;
            padding: 10px;
            border: 5px solid #eeeeee;
            height: 170px;
        }
        .citation {
            font-size: 20px;
            color: #3268ba;
        }
        `
    ]
})
export class HomeComponent {
    open: boolean = false;
    toggleElement: string = "closed";
    animateCitation: string = "stateB";
    index: number = 0;


    quotes: quote[] = [
        {
            id: 0,
            text: "aaa aaaa aaaa",
            author: "toto"
        },
        { 
            id: 1,
            text: "bbb bbbb bbbbb bbbbb",
            author: "tata"
        },
        {
            id: 2,
            text: "cccccc cccccc ccccc cccc",
            author: "titi"
        },
    ]

    quote: quote = this.quotes[0];

    getPreviousQuote() {
        this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
        this.getSomeQuote(-1);
    }

    getNextQuote() {
        this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
        this.getSomeQuote(1);
    }

    getSomeQuote(increment:number) {

        this.index = this.index + increment;

        if(this.index >= this.quotes.length && increment === 1) {
            this.index = 0;
        }

        if(this.index < 0 && increment === -1) {
            this.index = this.quotes.length -1;
        }

        this.quote = this.quotes[this.index];
    }

    toggle() {
        this.open = !this.open;
        if(this.open) {
            this.toggleElement = 'open';
        } else {
            this.toggleElement = 'closed';
        }
    }
}


interface quote {
    id: number;
    text: string;
    author: string;
}