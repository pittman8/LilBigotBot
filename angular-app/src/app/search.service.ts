import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Search {   //Not sure what this does
  name: string;
 }

@Injectable({ // this makes this service injectable, Angular's dependecy injection model
  providedIn: 'root'
})

export class SearchService {

  constructor(private http: HttpClient) {}
  
  sayHello() {
    let result = 'clicked';
  
    let test = this.http.get('http://localhost:80/hello');
    console.log(test);

    return result;
    //return  this.http.get<Task[]>('http://localhost:3000/tasks');
   //return  this.http.get<Task[]>(' https://kurtmongoserver.azurewebsites.net/tasks/');
 }
}
