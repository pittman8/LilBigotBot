import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { Hello } from './Hello';

export interface Hello {   // I have no idea what this does!!!
  value: string;
 }

@Injectable({ // this makes this service injectable, Angular's dependecy injection model
  providedIn: 'root'
})

export class SearchService {
  newHello: Hello = new Hello();
  
  constructor(private http: HttpClient) {}  
  
  sayHello(): Observable<Hello> {
    console.log('sayHello()');
	  return this.http.get<Hello>('http://localhost:3000/hello');
  };   
    
     //return  this.http.get<Task[]>('http://localhost:3000/tasks');
   //return  this.http.get<Task[]>(' https://kurtmongoserver.azurewebsites.net/tasks/');
 
}
