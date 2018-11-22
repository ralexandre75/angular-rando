import { Component } from '@angular/core';
import { MapService } from './map.service';

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

    markerWasDropped: boolean;

    startingPoint: string = "La ville Ollivier, 35140 Mézières-sur-Couesnon, France";

    markers: marker[] = [];

    constructor(private _mapService: MapService) {

    }

    onCoordMarkerDropped(event: any) {
        console.log(event);

        this.markerWasDropped = true;
        this.droppedLat = event.coords.lat.toFixed(5);
        this.droppedLng = event.coords.lng.toFixed(5);
    }

    geocode() {
        this._mapService
            .getLatLng(this.startingPoint)
            .subscribe(
                (data: any) => this.placeMarkerOnGeocodedPlace(data),
                (err: any) => console.error(err)
            );

    }

    placeMarkerOnGeocodedPlace(location: any) {
        let marker = {
            lat: location.geometry.location.lat(),
            lng: location.geometry.location.lng(),
            title: "",
            draggable: true
        }

        this.markers.push(marker);
    }   
}

interface marker {
    lat: number;
    lng: number;
    title?: string;
    icon?: string;
    draggable: boolean;
}
