// This async functionality uses an Angular HttpClint module to do the REST api to node
// for us. As we need calls to Node and over to mongo to be async, it uses the
// Observable  (called with a .subscribe modifier)
// each of the 5 methods return back the RESULT of executing the this.http.something call
// up to the node server
// all od this is provided to any component in the app as an Angular "Service"
//import { Observable } from 'rxjs/Observable';  // one article had it this way, didn't work
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hello } from './Hello';

export interface Hello {   // I have no idea what this does!!!
  _id: String;
 value: string;
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HelloService {
  constructor(private http: HttpClient) {}

  sayHello(clientHello: Hello): Observable<Hello> {    
    return  this.http.post<Hello>('http://localhost:80/hello', clientHello);
    //return  this.http.post<Hello>('https://bigotbotserver.azurewebsites.net/hello', clientHello);
  }

  getSlurs(): Observable<Hello> {    
    return  this.http.get<Hello>('http://localhost:80/slurs');
    //return  this.http.post<Hello>('https://bigotbotserver.azurewebsites.net/hello');
  }
}
