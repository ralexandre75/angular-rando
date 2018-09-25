import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-details',
    templateUrl: 'hike-details.component.html'
})
export class HikeDetailsComponent implements OnInit {

    constructor(private _route: ActivatedRoute) {}

    ngOnInit() {
        const id = this._route.snapshot.params['id'];
    }
}
