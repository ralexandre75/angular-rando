import { Component, Input } from "@angular/core";
import { Hike } from "./hike"

@Component({
    selector: 'app-hike-summary',
    templateUrl: 'hike-summary.component.html'
})

export class HikeSummaryComponent {
    @Input() hike: Hike;
}