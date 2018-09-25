import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HikeListComponent } from './hike-list.component';
import { HikeService } from './hike.service';
import { HikeDetailsComponent } from './hike-details.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        HikeListComponent,
        HikeDetailsComponent
    ],
    exports: [HikeListComponent],
    providers: [HikeService]
})

export class HikeModule {
}
