import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HikeListComponent } from './hike-list.component';
import { HikeService } from './hike.service';

@NgModule({
    imports: [CommonModule],
    declarations: [HikeListComponent],
    exports: [HikeListComponent],
    providers: [HikeService]
})

export class HikeModule {
}
