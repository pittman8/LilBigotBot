import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Slurs } from './slurs';

export interface Slurs {   // I have no idea what this does!!!
  _id: String;
 value: string;
}


@Injectable({
  providedIn: 'root'
})
export class SlursService {

  constructor(private http: HttpClient) {}

  getslurs(): Observable<Slurs> {    
    //return  this.http.get<Slurs>('http://localhost:80/slurs');
    return  this.http.get<Slurs>('https://bigotbotserver.azurewebsites.net/analytics');
  }
}
