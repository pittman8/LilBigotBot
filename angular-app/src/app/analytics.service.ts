import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Stats } from './stats';

export interface Stats {   // I have no idea what this does!!!
  _id: String;
 value: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http: HttpClient) {}

  getstats(): Observable<Stats> {    
    return  this.http.get<Stats>('http://localhost:80/analytics');
    //return  this.http.get<Stats>('https://bigotbotserver.azurewebsites.net/analytics');
  }
}

// This async functionality uses an Angular HttpClint module to do the REST api to node
// for us. As we need calls to Node and over to mongo to be async, it uses the
// Observable  (called with a .subscribe modifier)
// each of the 5 methods return back the RESULT of executing the this.http.something call
// up to the node server
// all od this is provided to any component in the app as an Angular "Service"
//import { Observable } from 'rxjs/Observable';  // one article had it this way, didn't work
