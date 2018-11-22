import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map.component';
import { MapService } from './map.service';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyAew4Z261E-iPAf9iVVDcBXOhBIiC7Py5Q'
          })
        ],
    declarations: [ MapComponent ],
    exports: [],
    providers: [ MapService ]
})

export class MapModule {

}