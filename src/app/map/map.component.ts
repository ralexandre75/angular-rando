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

    droppedLat: number;
    droppedLng: number;

    markerWasDropped : boolean;

    onCoordMarkerDropped(event: any) {
        console.log(event);

        this.markerWasDropped = true;
        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);
    }

    
}