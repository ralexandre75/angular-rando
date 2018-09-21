import { Component } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Hike } from './hike/hike';
import { HikeService } from './hike/hike.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
