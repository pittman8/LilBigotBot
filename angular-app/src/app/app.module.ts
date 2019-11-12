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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';

//import { TwitterWidget } from "ngtweet";

//import { NgxTweetListModule } from 'ngx-twitter';

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
    NgxTweetModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
    //NgTwitterWidgetModule
  ],
  exports: [
    SearchComponent
  //  TwitterWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
