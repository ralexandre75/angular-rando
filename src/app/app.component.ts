import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Hike } from './hike/hike';
import { HikeService } from './hike/hike.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hikes: Hike[];

  constructor(private _hikeService: HikeService) {
  }

  ngOnInit() {
     // this.hikes = this._hikeService.getHikes();
    this._hikeService.getHikesFromAPI().subscribe(
                                              res => this.hikes = res,
                                              err => console.error(err.status)
    );
    console.log(this.hikes);
  }
}
