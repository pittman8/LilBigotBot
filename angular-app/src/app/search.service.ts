import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Search {
    value: string;
}

@Injectable({ // this makes this service injectable, Angular's dependecy injection model
  providedIn: 'root'
})

export class SearchService {
  config: Search;
  constructor(private http: HttpClient) {}
  
  sayHello() {
	console.log('sayHello()');
	let returnResponse = ({value: 'failure'});
	let test = this.http.get('http://localhost:3000/hello');
	returnResponse.value = test.value;
	console.log('returning:' + returnResponse.value);
	return returnResponse;
   
    //let result = 'clicked';
  
    
     //return  this.http.get<Task[]>('http://localhost:3000/tasks');
   //return  this.http.get<Task[]>(' https://kurtmongoserver.azurewebsites.net/tasks/');
 }
}
