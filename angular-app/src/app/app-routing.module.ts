import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { SearchComponent } from './search/search.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const myRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search', component: SearchComponent },
 { path: 'analytics', component: AnalyticsComponent },
 { path: 'resources', component: ResourcesComponent }
];


@NgModule({
 imports: 
  [ RouterModule.forRoot(myRoutes) ]
 ,
 exports: [
   RouterModule
 ],
 declarations: []
})
export class AppRoutingModule { }

