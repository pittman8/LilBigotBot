import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';   

import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { SearchComponent } from './search/search.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxTweetModule } from "ngx-tweet";
<<<<<<< HEAD
=======
//import { TwitterWidget } from "ngtweet";

//import { NgxTweetListModule } from 'ngx-twitter';
>>>>>>> 8d189238d32b7defb0ed1a93d5bd602d10eb8daf

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    SearchComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
<<<<<<< HEAD
    NgxTweetModule  
=======
    NgxTweetModule,
    //NgTwitterWidgetModule
  ],
  exports: [
    SearchComponent
  //  TwitterWidgetModule
>>>>>>> 8d189238d32b7defb0ed1a93d5bd602d10eb8daf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
