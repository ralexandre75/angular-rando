import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HikeModule } from './hike/hike.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { HikeListComponent } from './hike/hike-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HikeDetailsComponent } from './hike/hike-details.component';


const APP_ROUTE: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'hikes/:id', component: HikeDetailsComponent },
  { path: 'hikes', component: HikeListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HikeModule,
    HttpModule,
    HomeModule,
    RouterModule.forRoot(APP_ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {

}
