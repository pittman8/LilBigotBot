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
    NgxTweetModule
  ],
  exports: [
    SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
