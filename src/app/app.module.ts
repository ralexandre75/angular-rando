import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { HikeModule } from './hike/hike.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HikeListComponent } from './hike/hike-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { HikeDetailsComponent } from './hike/hike-details.component';
import { ContactUsComponent } from './contact/contact-us.component';



const APP_ROUTE: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'hikes', component: HikeListComponent },
  { path: 'hikes/:id', component: HikeDetailsComponent },
  { path: 'contact', component: ContactUsComponent },
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
    ContactModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTE)
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule {

}
