import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Hello } from './Hello';

export interface Hello {
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
 //   return  this.http.post<Hello>('http://localhost:80/hello', clientHello);
    return  this.http.post<Hello>('https://bigotbotserver.azurewebsites.net/hello', clientHello);
  }
}
