import { Component } from '@angular/core';

@Component ({
    selector: 'app-map',
    templateUrl: 'map.component.html',
    styleUrls: [
        'map.component.css'
    ]
})

export class MapComponent {
    lat: number = 48.30740;
    lng: number = -1.43276;
}