import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { SearchComponent } from './search/search.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    SearchComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
