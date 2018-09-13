import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Hike } from './hike';
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/operators';


@Injectable()
export class HikeService {

    constructor(private _http: Http) {

    }

      // getHikes() {
      //     return this.hikes;
      // }

      getHikesFromAPI() {
        return this._http.get('app/api/hikes.json').pipe(tap(x => console.log(x)), map(hikes => hikes.json()));
      }
}
