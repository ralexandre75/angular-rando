import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Hike } from "./hike"

@Component({
    selector: 'app-hike-summary',
    templateUrl: 'hike-summary.component.html'
})

export class HikeSummaryComponent {
    @Input() hike: Hike;
    @Output() addhikeasfavorite = new EventEmitter();

    toggleAsTodoHike(isAdded:any) {
        console.log(isAdded);
        if(isAdded) {
            this.addhikeasfavorite.emit(this.hike);
        }
    }


}