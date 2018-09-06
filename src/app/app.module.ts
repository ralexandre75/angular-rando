import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HikeModule } from './hike/hike.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HikeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
